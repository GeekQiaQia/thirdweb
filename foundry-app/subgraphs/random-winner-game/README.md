Random Winner Game Subgraph — Build & Deploy Guide

**Overview**
- This subgraph indexes `GameStarted`, `PlayerJoined`, `GameEnded`, and `GameCancelled` events from the `RandomWinnerGame` contract on `sepolia`.
- Use these steps to generate types, compile, deploy to The Graph Studio, and validate with queries.

**Prerequisites**
- Node.js and Yarn installed.
- Graph CLI installed: `npm i -g @graphprotocol/graph-cli` (or use the project’s local scripts).
- The Graph Studio access token:
  - Authenticate once: `graph auth --studio <YOUR_ACCESS_TOKEN>`
- Confirm contract `address` and `startBlock` in `subgraph.yaml` are correct for your deployment.

**Install**
- In this folder: `yarn`

**Update Config**
- Edit `subgraph.yaml`:
  - `address`: set to your deployed contract address on sepolia.
  - `startBlock`: set to the block where the contract was deployed.
- ABI: `abis/RandomWinnerGame.json` must contain all events you index (includes `GameCancelled`).

**Generate Types**
- `yarn codegen`
- Generates TypeScript types for the ABI and GraphQL schema in `generated/`.
- Alternatively (global CLI): `graph codegen`
- Or without global install: `npx graph codegen`

**Build**
- `yarn build`
- Compiles mappings to WASM and outputs to `build/`.
- Alternatively (global CLI): `graph build`
- Or without global install: `npx graph build`

**Deploy (The Graph Studio)**
- Authenticate (one-time): `graph auth --studio <YOUR_ACCESS_TOKEN>`
- Deploy: `yarn deploy`
- Alternatively (global CLI): `graph deploy --studio random-winner-game`
- After deploy, note the subgraph URL shown in the output (Studio page) and the version (e.g., `v0.0.3`).
- Frontend configuration: point to a specific version for deterministic results, e.g.:
  - `https://api.studio.thegraph.com/query/<studio_id>/random-winner-game/v0.0.3`

**Local Graph Node (optional)**
- Create subgraph: `yarn create-local`
- Deploy to local node: `yarn deploy-local`
- Remove local subgraph: `yarn remove-local`

**Common GraphQL Queries**
- Latest started game:
```
query LatestGame {
  gameStarteds(first: 1, orderBy: blockNumber, orderDirection: desc) {
    gameId
    maxPlayers
    entryFee
    blockNumber
  }
}
```
- Players for a game:
```
query PlayersForGame($gameId: BigInt!) {
  playerJoineds(where: { gameId: $gameId }, orderBy: blockNumber, orderDirection: asc) {
    player
    blockNumber
  }
}
```
- Winner for a game:
```
query WinnerForGame($gameId: BigInt!) {
  gameEndeds(where: { gameId: $gameId }, first: 1, orderBy: blockNumber, orderDirection: desc) {
    winner
    requestId
    blockNumber
  }
}
```
- Cancellations:
```
query CancelledGames($gameId: BigInt) {
  gameCancelleds(where: { gameId: $gameId }, orderBy: blockNumber, orderDirection: desc) {
    gameId
    blockNumber
    transactionHash
  }
}
```

**Troubleshooting**
- Schema or ABI changed? Run `yarn codegen` before `yarn build`.
- No data appearing:
  - Check that `address` and `startBlock` in `subgraph.yaml` match the actual deployed contract.
  - Confirm the contract emits the events you expect (e.g., `GameCancelled` is emitted in `cancelGame`).
  - Indexing can lag by a few seconds; refresh the query.
- Build fails: verify mapping imports match generated types and `apiVersion`/`specVersion` are compatible.

**Redeploying After Contract Changes**
- Any Solidity change requires redeploying the contract (new address).
- Update `subgraph.yaml` with the new `address` and `startBlock`.
- Run `yarn codegen && yarn build` and then `yarn deploy` to ship the updated subgraph.
- Or using the global CLI: `graph codegen && graph build && graph deploy --studio random-winner-game`