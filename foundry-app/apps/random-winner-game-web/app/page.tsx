"use client";

import Image from "next/image";
import styles from "./page.module.css";

import { useEffect, useState } from "react";
import { abi, RANDOM_GAME_NFT_CONTRACT_ADDRESS } from "@/constants";
import { useAccount, useReadContracts, useWriteContract, usePublicClient } from "wagmi";
import { sepolia } from "viem/chains";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { parseEther, formatEther, isAddressEqual } from "viem";
import { FETCH_LATEST_GAME, FETCH_PLAYERS_FOR_GAME, FETCH_WINNER_FOR_GAME } from "@/queries";
import { subgraphQuery } from "@/utils";

export default function Home() {


  const { address } = useAccount();
  console.log('address',address);
  // this hook from wagmi helps us to perform write transactions on our contract
  //it has a function called writeContractAsync that can be awaited
  const { writeContractAsync } = useWriteContract();
  const publicClient = usePublicClient();
  

  // walletConnected state was unused; removing it to satisfy lint rules
  
  // loading is set to true when we are waiting for a transaction to get mined
  const [loading, setLoading] = useState(false);
  // 通过读取合约 owner 与当前钱包地址比较，判断是否为所有者（大小写不敏感）
  // entryFee is the ether required to enter a game
  const [entryFee, setEntryFee] = useState("");
  // store fee in wei for precise value sending
  const [entryFeeWei, setEntryFeeWei] = useState<bigint | null>(null);
  // maxPlayers is the max number of players that can play the game
  const [maxPlayers, setMaxPlayers] = useState<number>(0);
  // Form error states
  const [feeError, setFeeError] = useState<string | null>(null);
  const [playersError, setPlayersError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  // 根据合约读取结果计算当前是否有进行中的游戏
  const [players, setPlayers] = useState<string[]>([]);
  // Winner state was unused; removing to satisfy lint rules
  // Keep a track of all the logs for a given game
  const [logs, setLogs] = useState<string[]>([]);
  // reactive ownership and game state
  const [isOwner, setIsOwner] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  // syncing: after tx mined, waiting for read state to reflect
  const [syncing, setSyncing] = useState(false);
  

  // this hook from wagmi allows us to read multiple values from a contract and store them in a single variable
  // it will return an object whose "data" key will contain an array of objects. All objects will have a "result" key which will contain our required data as the value
  const contractReadResult = useReadContracts({
    contracts: [
      {
        address: RANDOM_GAME_NFT_CONTRACT_ADDRESS,
        abi: abi,
        functionName: "gameStarted",
        chainId: sepolia.id,
      },
      {
        address: RANDOM_GAME_NFT_CONTRACT_ADDRESS,
        abi: abi,
        functionName: "owner",
        chainId: sepolia.id,
      },

    ],
  });

  // keep isOwner/gameStarted in React state so UI re-renders on changes
  useEffect(() => {
    const startedNow = Boolean(contractReadResult.data?.[0]?.result);
    const ownerAddr = contractReadResult.data?.[1]?.result as string | undefined;
    const isOwnerNow = ownerAddr && address
      ? isAddressEqual(ownerAddr as `0x${string}`, address as `0x${string}`)
      : false;
    setGameStarted(startedNow);
    setIsOwner(isOwnerNow);
    console.log("address", address);
    console.log({ ownerAddress: ownerAddr, isOwner: isOwnerNow, gameStarted: startedNow });
  }, [contractReadResult.data, address]);


  

  /**
   * startGame: Is called by the owner to start the game
   */
  const startGame = async () => {
    try {
      if (!publicClient) {
        setLogs((prev) => [...prev, "Public client unavailable. Connect wallet and retry."]); 
        return;
      }
      if (!address) {
        setLogs((prev) => [...prev, "Connect your wallet to start a game."]);
        return;
      }
      // basic validation to avoid revert during gas estimation
      const maxPlayersValid = Number(maxPlayers) >= 2 && Number(maxPlayers) <= 255;
      const entryFeeValid = entryFee !== "" && Number(entryFee) > 0;
      if (!maxPlayersValid || !entryFeeValid) {
        // set user-visible errors
        setFormError("Please fix the highlighted fields.");
        setPlayersError(!maxPlayersValid ? "Max players must be between 2 and 255." : null);
        setFeeError(!entryFeeValid ? "Entry fee must be greater than 0 ETH." : null);
        setLogs((prev) => [
          ...prev,
          !maxPlayersValid ? "Max players must be between 2 and 255." : "",
          !entryFeeValid ? "Entry fee must be greater than 0 ETH." : "",
        ].filter(Boolean));
        return;
      }
      setFormError(null);
      setPlayersError(null);
      setFeeError(null);
      setLoading(true);
      // simulate to get accurate gas & request
      const { request } = await publicClient.simulateContract({
        account: address,
        abi,
        address: RANDOM_GAME_NFT_CONTRACT_ADDRESS,
        functionName: "startGame",
        args: [maxPlayers, parseEther(entryFee)],
        chain: sepolia,
      });
      const hash = await writeContractAsync(request);
      // Wait until tx is mined, then refetch chain state
      await publicClient.waitForTransactionReceipt({ hash });
      setLoading(false);
      setSyncing(true);
      if (typeof contractReadResult.refetch === "function") {
        await contractReadResult.refetch();
      }
      setSyncing(false);
    } catch (err) {
      console.error(err);
      setLogs((prev) => [...prev, `Failed to start game: ${(err as Error).message}`]);
      setLoading(false);
    }
  };

  /**
   * cancelGame: Owner can cancel a running game
   */
  const cancelGame = async () => {
    try {
      if (!publicClient) {
        setLogs((prev) => [...prev, "Public client unavailable. Connect wallet and retry."]);
        return;
      }
      if (!address) {
        setLogs((prev) => [...prev, "Connect your wallet to cancel the game."]);
        return;
      }
      if (!gameStarted) {
        setLogs((prev) => [...prev, "No active game to cancel."]);
        return;
      }
      setLoading(true);
      const { request } = await publicClient.simulateContract({
        account: address,
        abi,
        address: RANDOM_GAME_NFT_CONTRACT_ADDRESS,
        functionName: "cancelGame",
        args: [],
        chain: sepolia,
      });
      const hash = await writeContractAsync(request);
      await publicClient.waitForTransactionReceipt({ hash });
      setLoading(false);
      setSyncing(true);
      if (typeof contractReadResult.refetch === "function") {
        await contractReadResult.refetch();
      }
      setSyncing(false);
      // Reset local UI state optimistically; subgraph will confirm shortly
      setPlayers([]);
      setMaxPlayers(0);
      setEntryFee("");
      setEntryFeeWei(null);
      setLogs((prev) => [...prev, "Game cancelled by owner. You can start a new game."]);
    } catch (err) {
      console.error(err);
      setLogs((prev) => [...prev, `Failed to cancel game: ${(err as Error).message}`]);
      setLoading(false);
    }
  };

  /**
   * joinGame: Is called by a player to join the game
   */
  const joinGame = async () => {
    console.log("joining with entryFee (ETH)", entryFee, "wei:", entryFeeWei?.toString())
    try {
      if (!publicClient) {
        setLogs((prev) => [...prev, "Public client unavailable. Connect wallet and retry."]); 
        return;
      }
      if (!address) {
        setLogs((prev) => [...prev, "Connect your wallet to join the game."]); 
        return;
      }
      // Avoid BigInt literal (0n) to support ES2017 target
      if (entryFeeWei === null || entryFeeWei <= BigInt(0)) {
        setLogs((prev) => [...prev, "Entry fee not loaded yet. Please wait..."]); 
        return;
      }
      setLoading(true);
      // simulate to get request with correct gas & value
      const { request } = await publicClient.simulateContract({
        account: address,
        abi,
        address: RANDOM_GAME_NFT_CONTRACT_ADDRESS,
        functionName: "joinGame",
        args: [],
        value: entryFeeWei,
        chain: sepolia,
      });
      await writeContractAsync(request);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLogs((prev) => [...prev, `Failed to join game: ${(error as Error).message}`]);
      setLoading(false);
    }

  };


  useEffect(() => {
    const run = async () => {
      try {
        // 1) 从子图获取最新的 GameStarted
        const latest = await subgraphQuery(FETCH_LATEST_GAME());
        const startedGame = latest?.gameStarteds?.[0];
        if (!startedGame) {
          setLogs(["No game found. Ask owner to start one."]);
          setPlayers([]);
          setEntryFee("");
          setEntryFeeWei(null);
          setMaxPlayers(0);
          return;
        }

        const currentGameId = BigInt(startedGame.gameId);
        const feeWei = BigInt(startedGame.entryFee);
        const maxPlayersForGame = Number(startedGame.maxPlayers);
        setEntryFeeWei(feeWei);
        setEntryFee(formatEther(feeWei));
        setMaxPlayers(maxPlayersForGame);

        // 2) 获取该局的玩家
        const playersRes = await subgraphQuery(FETCH_PLAYERS_FOR_GAME(Number(currentGameId)));
        const joined = (playersRes?.playerJoineds ?? []).map((p: { player: string }) => p.player);

        // 3) 查询赢家
        const winnerRes = await subgraphQuery(FETCH_WINNER_FOR_GAME(Number(currentGameId)));
        const winner = winnerRes?.gameEndeds?.[0]?.winner ?? null;

        // Build logs
        let _logs: string[] = [];
        const started = Boolean(contractReadResult.data?.[0]?.result);
        if (started) {
          _logs = [`Game has started with ID: ${currentGameId.toString()}`];
          if (joined.length > 0) {
            _logs.push(`${joined.length} / ${maxPlayersForGame} already joined 👀 `);
            joined.forEach((player: string) => _logs.push(`${player} joined 🏃‍♂️`));
          }
        } else if (!started && winner) {
          _logs = [
            `Last game has ended with ID: ${currentGameId.toString()}`,
            `Winner is: ${winner} 🎉 `,
            `Waiting for host to start new game....`,
          ];
        }

        setLogs(_logs);
        setPlayers(joined);
      } catch (error) {
        console.error(error);
      }
    };
    run();
  }, [contractReadResult.data]);

  /*
    renderButton: Returns a button based on the state of the dapp
  */
  const renderButton = () => {
    // If wallet is not connected, return a button which allows them to connect their wallet
    if (!address) {
      return (
        <div className={styles.connect}>
          <ConnectButton />
        </div>
      );
    }

    // If we are currently waiting for something, return a loading button
    if (loading) {
      return <button className={styles.button}>Loading...</button>;
    }
    // If syncing state from chain after tx, show updating indicator
    if (syncing) {
      return <button className={styles.button} disabled>Updating state...</button>;
    }
    // Render when the game has started
      if (gameStarted) {
        // Only show "Choosing winner..." when we actually know maxPlayers (>0)
        // and the lobby is full. Prevents incorrect state after refresh.
        if (maxPlayers > 0 && players.length >= maxPlayers) {
          return (
            <button className={styles.button} disabled>
              Choosing winner...
            </button>
          );
        }
        return (
          <div>
            <button className={styles.button} onClick={joinGame} disabled={entryFeeWei === null || loading}>
              Join Game 🚀
            </button>
            {isOwner ? (
              <button className={styles.button} onClick={cancelGame} disabled={loading} style={{ marginLeft: 12 }}>
                Cancel Game 🛑
              </button>
            ) : null}
          </div>
        );
      }
    // Start the game
    if (isOwner && !gameStarted) {
      return (
        <div>
          <div className={styles.inputs}>
            <input
            type="number"
            className={`${styles.input} ${feeError ? styles.inputError : ""}`}
            onChange={(e) => {
              // Keep entryFee as a string; guard against negatives
              const v = e.target.value;
              setEntryFee(Number(v) >= 0 ? v : "0");
              setFeeError(null);
              setFormError(null);
            }}
            placeholder="Entry Fee (ETH)"
            min={0}
            step={0.0001}
            aria-invalid={!!feeError}
            aria-describedby={feeError ? "entry-fee-error" : undefined}
            />
            {feeError ? (
              <div id="entry-fee-error" className={styles.errorText}>
                {feeError}
              </div>
            ) : null}
            <input
            type="number"
            className={`${styles.input} ${playersError ? styles.inputError : ""}`}
            onChange={(e) => {
              // The user will enter the value for maximum players that can join the game
              setMaxPlayers(Number(e.target.value ?? 0));
              setPlayersError(null);
              setFormError(null);
            }}
            placeholder="Max players"
            min={2}
            max={255}
            step={1}
            aria-invalid={!!playersError}
            aria-describedby={playersError ? "max-players-error" : undefined}
            />
            {playersError ? (
              <div id="max-players-error" className={styles.errorText}>
                {playersError}
              </div>
            ) : null}
          </div>
          {formError ? (
            <div className={styles.errorBanner} role="alert" aria-live="polite">
              {formError}
            </div>
          ) : null}
          <button
            className={styles.button}
            onClick={startGame}
            disabled={Number(maxPlayers) < 2 || Number(entryFee) <= 0}
          >
            Start Game 🚀
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.panel}>
          <h1 className={styles.title}>Welcome to Random Winner Game!</h1>
          <div className={styles.description}>
            It is a lottery game where a winner is chosen at random and wins the
            entire lottery pool
          </div>
          {renderButton()}
          <div className={styles.hud}>
            {logs &&
              logs.map((log, index) => (
                <div className={styles.log} key={index}>
                  {log}
                </div>
              ))}
          </div>
        </div>
        <div className={styles.panel}>
          <Image
            className={styles.image}
            src="/random-winner-hero.svg"
            alt="Random Winner Trophy"
            width={500}
            height={500}
            priority
            sizes="(max-width: 1000px) 90vw, 420px"
          />
        </div>
      </div>

      <footer className={styles.footer}>Made with &#10084; by Shaun</footer>
    </div>
  );
}
