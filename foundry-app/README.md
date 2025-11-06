## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

- **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
- **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
- **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
- **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```

demo from :https://learnweb3.io/courses/sophomore/build-an-nft-collection-with-a-whitelist-using-foundry-and-solidity/


source .env

### Switch to Ankr RPC

The URL `https://www.ankr.com/rpc/home/` is a landing page, not an RPC endpoint. Use the network-specific Ankr RPC URL. For Sepolia, the endpoint is:

```
https://rpc.ankr.com/eth_sepolia
```

Update your `.env` and reload:

```bash
# .env
# QUICKNODE_RPC_URL=https://rpc.ankr.com/eth_sepolia
source .env
```

Verify connectivity:

```bash
cast chain-id --rpc-url "$QUICKNODE_RPC_URL"   # should return 11155111
cast block-number --rpc-url "$QUICKNODE_RPC_URL"
```

Or pass the URL directly in commands (no env needed):

```bash
forge create --rpc-url "https://rpc.ankr.com/eth_sepolia" --private-key "0x$PRIVATE_KEY" src/LW3Punks.sol:LW3Punks --constructor-args "ipfs://bafybeiclpfnhtzmy7icx4whsrzq6wkpdote6k6iabimi4xx62lmc3tu53e/" --chain-id 11155111 --broadcast --verify --etherscan-api-key "$ETHERSCAN_API_KEY"
```

forge create src/Whitelist.sol:Whitelist --rpc-url "$QUICKNODE_RPC_URL" --private-key "$PRIVATE_KEY" --constructor-args 10 --verify --etherscan-api-key "$ETHERSCAN_API_KEY"

forge create --rpc-url "$QUICKNODE_RPC_URL" --private-key "$PRIVATE_KEY" --broadcast --verify --etherscan-api-key "$ETHERSCAN_API_KEY" src/CryptoDevs.sol:CryptoDevs --constructor-args 0xD1Bf5C82aFCB93A6B8a347b44D0CCe730132e541


## Project Status (English Summary)

- Foundry project is set up with OpenZeppelin Contracts (installed as a git submodule under lib/openzeppelin-contracts).
- Contracts implemented:
  - Whitelist.sol — manages whitelist addresses and max count (constructor takes uint8 maxWhitelistedAddresses).
  - CryptoDevs.sol — ERC721Enumerable + Ownable NFT collection with:
    - Price: 0.01 ETH per token (public sale).
    - Max supply: 20.
    - Whitelist integration: reservedTokens equals whitelist.maxWhitelistedAddresses().
    - Whitelisted addresses can mint without paying the full price (send 0 ETH or less than 0.01 ETH); non-whitelisted must send >= 0.01 ETH.
    - Owner-only withdraw() to collect contract ETH.
- Compiler and config:
  - foundry.toml uses solc_version = 0.8.20 (compatible with OpenZeppelin ^0.8.20).
- Deployment (Sepolia):
  - Whitelist deployed and verified: 0xD1Bf5C82aFCB93A6B8a347b44D0CCe730132e541.
  - CryptoDevs ready to deploy using the Whitelist address above.

## Intended Workflow

1) Prepare environment
- Create a .env file with:
  - QUICKNODE_RPC_URL (Sepolia RPC)
  - PRIVATE_KEY (deployer) — keep secret; do not commit
  - ETHERSCAN_API_KEY (optional, for verification)

2) Deploy Whitelist
- Example (already done):
  forge create src/Whitelist.sol:Whitelist --rpc-url "$QUICKNODE_RPC_URL" --private-key "$PRIVATE_KEY" --constructor-args 10 --verify --etherscan-api-key "$ETHERSCAN_API_KEY"

3) Deploy CryptoDevs (pass Whitelist address)
- Example:
  forge create --rpc-url "$QUICKNODE_RPC_URL" --private-key "$PRIVATE_KEY" --broadcast --verify --etherscan-api-key "$ETHERSCAN_API_KEY" src/CryptoDevs.sol:CryptoDevs --constructor-args 0xD1Bf5C82aFCB93A6B8a347b44D0CCe730132e541

4) Mint NFTs
- Whitelisted address (free/gas-only mint):
  cast send $CRYPTODEVS_ADDRESS "mint()" --rpc-url "$QUICKNODE_RPC_URL" --private-key "$PRIVATE_KEY" --value 0
- Public mint (non-whitelisted must pay 0.01 ETH):
  cast send $CRYPTODEVS_ADDRESS "mint()" --rpc-url "$QUICKNODE_RPC_URL" --private-key "$PRIVATE_KEY" --value 10000000000000000

5) Read contract state
- Total supply:
  cast call $CRYPTODEVS_ADDRESS "totalSupply()(uint256)" --rpc-url "$QUICKNODE_RPC_URL"
- Reserved tokens:
  cast call $CRYPTODEVS_ADDRESS "reservedTokens()(uint256)" --rpc-url "$QUICKNODE_RPC_URL"
- Reserved tokens claimed:
  cast call $CRYPTODEVS_ADDRESS "reservedTokensClaimed()(uint256)" --rpc-url "$QUICKNODE_RPC_URL"
- Price:
  cast call $CRYPTODEVS_ADDRESS "_price()(uint256)" --rpc-url "$QUICKNODE_RPC_URL"

6) Withdraw funds (owner only)
- Send all contract ETH to owner:
  cast send $CRYPTODEVS_ADDRESS "withdraw()" --rpc-url "$QUICKNODE_RPC_URL" --private-key "$PRIVATE_KEY"

## Notes
- Always use --broadcast to actually send transactions; without it, some commands may only simulate.
- Ensure RPC, chain, and API keys are consistent across deploy and verify steps.
- Keep PRIVATE_KEY and any secrets out of version control.
- If local Anvil RPC encounters proxy/network restrictions, prefer deploying to Sepolia via a trusted RPC.



https://learnweb3.io/courses/sophomore/build-an-nft-powered-fully-on-chain-dao-to-invest-in-nft-collections-as-a-group/

```
forge create --rpc-url "$QUICKNODE_RPC_URL" --private-key "$PRIVATE_KEY" --broadcast --verify --etherscan-api-key "$ETHERSCAN_API_KEY" src/CryptoDevsNFT.sol:CryptoDevsNFT 
```
```
forge create --rpc-url "$QUICKNODE_RPC_URL" --private-key "$PRIVATE_KEY" --etherscan-api-key "$ETHERSCAN_API_KEY" --verify --broadcast src/FakeNFTMarketplace.sol:FakeNFTMarketplace
```

https://sepolia.etherscan.io/address/0x4270f449f91d0f194c2491e77ce5f93f1a96e617


```
forge create --rpc-url "$QUICKNODE_RPC_URL" --private-key "$PRIVATE_KEY" --broadcast src/CryptoDevsDAO.sol:CryptoDevsDAO --constructor-args 0x4270F449f91d0f194c2491e77cE5f93F1A96E617 0xD83966Be9876C05583E8955d0aa248dc2f0a184f 
```

## Deploy Details (Sepolia)

- Deployer: 0xD95442c30E1dfB7f4b1c519629200A6f2A40546E
- CryptoDevsNFT Address: 0xD83966Be9876C05583E8955d0aa248dc2f0a184f
- FakeNFTMarketplace Address: 0x4270F449f91d0f194c2491e77cE5f93F1A96E617
- CryptoDevsDAO Address: 0xeC01b978378846650b0c9C1DB5fd39e21AB0DdD3
- CryptoDevsDAO Transaction Hash: 0x8bc5ae1c67e6239437ac804d8763bd358fe0345230c26f880954e1a189544f4a

Etherscan Links:
- FakeNFTMarketplace: https://sepolia.etherscan.io/address/0x4270f449f91d0f194c2491e77ce5f93f1a96e617
- CryptoDevsNFT: https://sepolia.etherscan.io/address/0xd83966be9876c05583e8955d0aa248dc2f0a184f
- CryptoDevsDAO: https://sepolia.etherscan.io/address/0xec01b978378846650b0c9c1db5fd39e21ab0ddd3


### Preview
[https://thirdweb-virid-six.vercel.app](https://thirdweb-virid-six.vercel.app/)
![CryptoDevs Banner](./assets/3efcfb03-0524-4256-9773-f63dd46f7b10.png)

https://learnweb3.io/courses/sophomore/build-your-own-decentralized-exchange-like-uniswap-v1/

For deploying your token contract, make sure your terminal points to foundry-app and run this:

```
forge create src/Token.sol:Token \
  --rpc-url "$QUICKNODE_RPC_URL" \
  --private-key "$PRIVATE_KEY" \
  --verify \
  --etherscan-api-key "$ETHERSCAN_API_KEY" \
  --broadcast
```

Notes:
- Ensure `PRIVATE_KEY` in `.env` is prefixed with `0x`. If it is not, prefix when passing via CLI: `--private-key "0x$PRIVATE_KEY"`.
- Newer Foundry versions support `--broadcast` with both `forge create` and `forge script`. If your create command doesn’t broadcast, prefer the script flow below.

Now copy the obtained address since we’re gonna need it for our Exchange contract’s constructor. Run the following command

```
forge script script/DeployExchange.s.sol \
  --rpc-url "$QUICKNODE_RPC_URL" \
  --private-key "0x$PRIVATE_KEY" \
  --broadcast \
  --chain-id 11155111 -vv
```

Optional: Verify Exchange on Etherscan (Sepolia)
```
forge verify-contract \
  --chain-id 11155111 \
  --etherscan-api-key "$ETHERSCAN_API_KEY" \
  0x5393ffD3BFa13E7fE994Eba1d54080cA1F2D7AF8 \
  src/Exchange.sol:Exchange \
  --constructor-args 0x54D51BCE6d5afbDA565Ae9a15fBB5d0a52ED5E78 -vv
```

## Setting up 1 EVM.

==========================

Chain 11155111

Estimated gas price: 0.001051327 gwei

Estimated total gas used for script: 2299585

Estimated amount required: 0.000002417615799295 ETH

==========================

##### sepolia
✅  [Success] Hash: 0x3737c174b530d870dfd6be285031087e5ea6874d02338ce2aa6b375897d97be8
Contract Address: 0x5393ffD3BFa13E7fE994Eba1d54080cA1F2D7AF8
Block: 9515381
Paid: 0.000001859685488192 ETH (1768912 gas * 0.001051316 gwei)

✅ Sequence #1 on sepolia | Total Paid: 0.000001859685488192 ETH (1768912 gas * avg 0.001051316 gwei)
                                                        

==========================

ONCHAIN EXECUTION COMPLETE & SUCCESSFUL.

## verify-contract

```
forge verify-contract --chain-id 11155111 --etherscan-api-key "$ETHERSCAN_API_KEY" 0x5393ffD3BFa13E7fE994Eba1d54080cA1F2D7AF8 src/Exchange.sol:Exchange --constructor-args $(cast abi-encode "constructor(address)" 0x54D51BCE6d5afbDA565Ae9a15fBB5d0a52ED5E78) --watch -vv 

```

```
forge verify-check --chain sepolia --etherscan-api-key "$ETHERSCAN_API_KEY" hpd6xg6fpsbqgd4p8lzvcxd1hvkvvfkjzjgxlrbrrgtf2sdqks -vv 
```

Now we'll have to load our environment variables into the terminal's environment.  For doing this, run the following command in your terminal
```
source .env
```
to deploy your contract, run the following command:

```
forge script script/DeployLW3Punks.s.sol:DeployLW3Punks --rpc-url "$QUICKNODE_RPC_URL" --private-key "$PRIVATE_KEY" --chain-id 11155111 --broadcast --verify --etherscan-api-key "$ETHERSCAN_API_KEY" -vvvv 

```

https://learnweb3.io/courses/junior/secure-on-chain-randomness-using-chainlink-vrfs/



deploy script:
```
FORGE_MAX_WORKERS=1 forge script script/DeployRandomWinnerGame.s.sol:DeployRandomWinnerGame --rpc-url $QUICKNODE_RPC_URL --private-key $PRIVATE_KEY --broadcast

```
##### sepolia

✅  [Success] Hash: 0xa25fe38759e42c60f9d5aea57de2fc511066862f737eeedc81db6507d5d5f1f4
Contract Address: 0x1Fbe03EAC39d40ED8457Ad30edF667584A99BF6a
Block: 9566340
Paid: 0.000001889283110715 ETH (1889285 gas * 0.000999999 gwei)

✅ Sequence #1 on sepolia | Total Paid: 0.000001889283110715 ETH (1889285 gas * avg 0.000999999 gwei)

ONCHAIN EXECUTION COMPLETE & SUCCESSFUL

https://sepolia.etherscan.io/address/0x1Fbe03EAC39d40ED8457Ad30edF667584A99BF6a

we need to verify and publish the contract
Verify both Sepolia contracts with the exact deploy compiler:

```
FORGE_MAX_WORKERS=1 forge verify-contract --chain sepolia --compiler-version v0.8.20+commit.a1b79de6 --etherscan-api-key $ETHERSCAN_API_KEY 0x1Fbe03EAC39d40ED8457Ad30edF667584A99BF6a src/RandomWinnerGame.sol:RandomWinnerGame --watch
```

```
FORGE_MAX_WORKERS=1 forge verify-contract --chain sepolia --compiler-version v0.8.20+commit.a1b79de6 --etherscan-api-key $ETHERSCAN_API_KEY 0x43688a0068D08f5f168b7289eea528EEe4891A3c src/RandomWinnerGame.sol:RandomWinnerGame --watch
```

now it's verified 