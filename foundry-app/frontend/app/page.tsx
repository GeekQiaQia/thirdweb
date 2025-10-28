'use client'

import {
  CryptoDevsDAOABI,
  CryptoDevsDAOAddress,
  CryptoDevsNFTABI,
  CryptoDevsNFTAddress,
} from "@/constant";
import { config } from "./provider";
import { ConnectButton } from "@rainbow-me/rainbowkit";
// Removed next/head to satisfy Next.js core-web-vitals lint rules in app router

import Image from "next/image";
import { useState, useCallback } from "react";
import { formatEther } from "viem/utils";
import { useAccount, useBalance, useContractRead } from "wagmi";
import { readContract, waitForTransactionReceipt, writeContract } from "wagmi/actions";
import styles from "./page.module.css";
import { Inter } from "next/font/google";

// Define Proposal type for state and rendering
type Proposal = {
  proposalId: number;
  nftTokenId: string;
  deadline: Date;
  yayVotes: string;
  nayVotes: string;
  executed: boolean;
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  // Check if the user's wallet is connected, and it's address using Wagmi's hooks.
  const { address, isConnected } = useAccount();

  // State variable to know if the component has been mounted yet or not


  // State variable to show loading state when waiting for a transaction to go through
  const [loading, setLoading] = useState(false);

  // Fake NFT Token ID to purchase. Used when creating a proposal.
  const [fakeNftTokenId, setFakeNftTokenId] = useState("");
  // State variable to store all proposals in the DAO
  const [proposals, setProposals] = useState<Proposal[]>([]);
  // State variable to switch between the 'Create Proposal' and 'View Proposals' tabs
  const [selectedTab, setSelectedTab] = useState<string>("");

  // Fetch the owner of the DAO
  const daoOwner = useContractRead({
    abi: CryptoDevsDAOABI,
    address: CryptoDevsDAOAddress,
    functionName: "owner",
  });

  // Fetch the balance of the DAO
  const daoBalance = useBalance({
    address: CryptoDevsDAOAddress,
  });

  // Fetch the number of proposals in the DAO
  const numOfProposalsInDAO = useContractRead({
    abi: CryptoDevsDAOABI,
    address: CryptoDevsDAOAddress,
    functionName: "numProposals",
  });

  // Fetch the CryptoDevs NFT balance of the user
  const nftBalanceOfUser = useContractRead({
    abi: CryptoDevsNFTABI,
    address: CryptoDevsNFTAddress,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    // Only query when address is available to avoid errors
    query: { enabled: Boolean(address) },
  });

  // Function to make a createProposal transaction in the DAO
  async function createProposal() {
    setLoading(true);

    try {
      const tokenId = BigInt(fakeNftTokenId || "0");
      const tx = await writeContract(config, {
        address: CryptoDevsDAOAddress,
        abi: CryptoDevsDAOABI,
        functionName: "createProposal",
        args: [tokenId],
      });

      await waitForTransactionReceipt(config, { hash: tx });
    } catch (error) {
      console.error(error);
      window.alert(error as unknown as string);
    }
    setLoading(false);
  }

  // Function to fetch a proposal by it's ID
  async function fetchProposalById(id: number): Promise<Proposal | null> {
    try {
      const proposalTuple = await readContract(config, {
        address: CryptoDevsDAOAddress,
        abi: CryptoDevsDAOABI,
        functionName: "proposals",
        args: [BigInt(id)],
      }) as [bigint, bigint, bigint, bigint, boolean];

      const [nftTokenId, deadline, yayVotes, nayVotes, executed] = proposalTuple;

      const parsedProposal: Proposal = {
        proposalId: id,
        nftTokenId: nftTokenId.toString(),
        deadline: new Date(parseInt(deadline.toString()) * 1000),
        yayVotes: yayVotes.toString(),
        nayVotes: nayVotes.toString(),
        executed: Boolean(executed),
      };

      return parsedProposal;
    } catch (error) {
      console.error(error);
      window.alert(error as unknown as string);
      return null;
    }
  }

  // Function to fetch all proposals in the DAO
  const fetchAllProposals = useCallback(async () => {
    try {
      const items: Proposal[] = [];

      const total = Number(numOfProposalsInDAO.data ?? BigInt(0));
      for (let i = 0; i < total; i++) {
        const proposal = await fetchProposalById(i);
        if (proposal) items.push(proposal);
      }

      setProposals(items);
      return items;
    } catch (error) {
      console.error(error);
      window.alert(error as unknown as string);
    }
  }, [numOfProposalsInDAO.data]);

  // Function to vote YAY or NAY on a proposal
  async function voteForProposal(proposalId: number, vote: "YAY" | "NAY") {
    setLoading(true);
    try {
      const tx = await writeContract(config, {
        address: CryptoDevsDAOAddress,
        abi: CryptoDevsDAOABI,
        functionName: "voteOnProposal",
        args: [BigInt(proposalId), vote === "YAY" ? 0 : 1],
      });

      await waitForTransactionReceipt(config, { hash: tx });
    } catch (error) {
      console.error(error);
      window.alert(error as unknown as string);
    }
    setLoading(false);
  }

  // Function to execute a proposal after deadline has been exceeded
  async function executeProposal(proposalId: number) {
    setLoading(true);
    try {
      const tx = await writeContract(config, {
        address: CryptoDevsDAOAddress,
        abi: CryptoDevsDAOABI,
        functionName: "executeProposal",
        args: [BigInt(proposalId)],
      });

      await waitForTransactionReceipt(config, { hash: tx });
    } catch (error) {
      console.error(error);
      window.alert(error as unknown as string);
    }
    setLoading(false);
  }

  // Function to withdraw ether from the DAO contract
  async function withdrawDAOEther() {
    setLoading(true);
    try {
      const tx = await writeContract(config, {
        address: CryptoDevsDAOAddress,
        abi: CryptoDevsDAOABI,
        functionName: "withdrawEther",
        args: [],
      });

      await waitForTransactionReceipt(config, { hash: tx });
    } catch (error) {
      console.error(error);
      window.alert(error as unknown as string);
    }
    setLoading(false);
  }

  // Render the contents of the appropriate tab based on `selectedTab`
  function renderTabs() {
    if (selectedTab === "Create Proposal") {
      return renderCreateProposalTab();
    } else if (selectedTab === "View Proposals") {
      return renderViewProposalsTab();
    }
    return null;
  }

  // Renders the 'Create Proposal' tab content
  function renderCreateProposalTab() {
    if (loading) {
      return (
        <div className={styles.description}>
          Loading... Waiting for transaction...
        </div>
      );
    } else if (
      typeof nftBalanceOfUser.data === "bigint" && nftBalanceOfUser.data === BigInt(0)
    ) {
      return (
        <div className={styles.description}>
          You do not own any CryptoDevs NFTs. <br />
          <b>You cannot create or vote on proposals</b>
        </div>
      );
    } else {
      return (
        <div className={styles.container}>
          <label>Fake NFT Token ID to Purchase: </label>
          <input
            placeholder="0"
            type="number"
            onChange={(e) => setFakeNftTokenId(e.target.value)}
          />
          <button className={styles.button2} onClick={createProposal}>
            Create
          </button>
        </div>
      );
    }
  }

  // Renders the 'View Proposals' tab content
  function renderViewProposalsTab() {
    if (loading) {
      return (
        <div className={styles.description}>
          Loading... Waiting for transaction...
        </div>
      );
    } else if (proposals.length === 0) {
      return (
        <div className={styles.description}>No proposals have been created</div>
      );
    } else {
      return (
        <div>
          {proposals.map((p, index) => (
            <div key={index} className={styles.card}>
              <p>Proposal ID: {p.proposalId}</p>
              <p>Fake NFT to Purchase: {p.nftTokenId}</p>
              <p>Deadline: {p.deadline.toLocaleString()}</p>
              <p>Yay Votes: {p.yayVotes}</p>
              <p>Nay Votes: {p.nayVotes}</p>
              <p>Executed?: {p.executed.toString()}</p>
              {p.deadline.getTime() > Date.now() && !p.executed ? (
                <div className={styles.flex}>
                  <button
                    className={styles.button2}
                    onClick={() => voteForProposal(p.proposalId, "YAY")}
                  >
                    Vote YAY
                  </button>
                  <button
                    className={styles.button2}
                    onClick={() => voteForProposal(p.proposalId, "NAY")}
                  >
                    Vote NAY
                  </button>
                </div>
              ) : p.deadline.getTime() < Date.now() && !p.executed ? (
                <div className={styles.flex}>
                  <button
                    className={styles.button2}
                    onClick={() => executeProposal(p.proposalId)}
                  >
                    Execute Proposal {BigInt(p.yayVotes) > BigInt(p.nayVotes) ? "(YAY)" : "(NAY)"}
                  </button>
                </div>
              ) : (
                <div className={styles.description}>Proposal Executed</div>
              )}
            </div>
          ))}
        </div>
      );
    }
  }

  if (!isConnected)
    return (
      <div className={inter.className}>
        <div className={`${styles.main} ${styles.landing}`}>
          {/* 背景装饰层：渐变与网格 */}
          <div className={styles.bgDecor} aria-hidden="true">
            <div className={styles.gridOverlay} />
            <div className={styles.glowA} />
            <div className={styles.glowB} />
          </div>

          <div className={styles.hero}>
            <h1 className={styles.title}>CryptoDevs DAO</h1>
            <div className={styles.description}>
              去中心化提案、投票与金库管理。连接钱包，参与治理，共建社区。
            </div>
            <div className={styles.badges}>
              <span>On-chain Proposals</span>
              <span>Token Voting</span>
              <span>Treasury</span>
            </div>
            <div className={styles.flex}>
              <ConnectButton />
            </div>
          </div>
          <div>
            <Image
              className={styles.image}
              src="/cryptodevs-banner.svg"
              alt="CryptoDevs DAO banner"
              width={600}
              height={600}
              priority
            />
          </div>
        </div>
      </div>
    );

  return (
    <div className={inter.className}>
      {/* Removed <Head> to comply with app router best practices; use layout.tsx metadata instead */}
      {/* <Head>
        <title>CryptoDevs DAO</title>
        <meta name="description" content="CryptoDevs DAO" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <div className={styles.main}>
        <div className={styles.hero}>
           <h1 className={styles.title}>Welcome to Crypto Devs!</h1>
           <div className={styles.description}>Welcome to the DAO!</div>
           <div className={styles.description}>
             Your CryptoDevs NFT Balance: {nftBalanceOfUser.data?.toString() ?? "0"}
             <br />
             {daoBalance.data && (
               <>
                 Treasury Balance: {formatEther(daoBalance.data.value).toString()} ETH
               </>
             )}
             <br />
             Total Number of Proposals: {numOfProposalsInDAO.data?.toString() ?? "0"}
           </div>
           <div className={styles.flex}>
             <button
               className={styles.button}
               onClick={() => setSelectedTab("Create Proposal")}
             >
               Create Proposal
             </button>
             <button
               className={styles.button}
               onClick={() => { setSelectedTab("View Proposals"); fetchAllProposals(); }}
             >
               View Proposals
             </button>
           </div>
           {renderTabs()}
           {/* Display additional withdraw button if connected wallet is owner */}
           {address && typeof daoOwner.data === "string" && address.toLowerCase() === daoOwner.data.toLowerCase() ? (
             <div>
               {loading ? (
                 <button className={styles.button}>Loading...</button>
               ) : (
                 <button className={styles.button} onClick={withdrawDAOEther}>
                   Withdraw DAO ETH
                 </button>
               )}
             </div>
           ) : (
             ""
           )}
         </div>
        <div>
          <Image
            className={styles.image}
            src="/cryptodevs-banner.svg"
            alt="CryptoDevs DAO banner"
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
    </div>
  );
}