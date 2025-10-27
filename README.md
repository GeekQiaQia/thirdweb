# thirdweb
third web starter 

for nextjs / react native

## Demo Index

- foundry-app — Foundry contracts and scripts (forge, anvil, cast)
- nextjs-app — Next.js DApp frontend
- vite-dapp — Vite + TypeScript DApp frontend
- react-native-app — React Native sample (Expo/EAS)
- NFT-Tutorial — Tutorial project with contracts and scripts

## Quick Start (Unified)

### Prerequisites
- Node.js and Yarn (use the same version across demos)
- Foundry (forge, anvil, cast) — see https://book.getfoundry.sh/

### 1) Start local chain
```sh
make -f scripts/Makefile anvil
```

### 2) Build & test contracts
```sh
make -f scripts/Makefile forge-build
make -f scripts/Makefile forge-test
```

### 3) Deploy to local (requires env)
Set environment variables in your shell or a .env file (do not commit real secrets):
```sh
export RPC_URL=http://127.0.0.1:8545
export PRIVATE_KEY=<local_private_key>
make -f scripts/Makefile deploy-local
```

### 4) Start frontends
Next.js DApp:
```sh
make -f scripts/Makefile dev-next
```
Vite DApp:
```sh
make -f scripts/Makefile dev-vite
```

## Environment & Conventions
- Each demo should provide a `.env.example` with consistent names (RPC_URL, PRIVATE_KEY, etc.).
- Keep heavy assets out of Git; use `.gitignore` to avoid committing logs and local caches.

## Notes
- If you prefer pnpm, you can adapt the dev targets to run pnpm install/dev.
- For React Native, run lint/type-check in CI; native builds are outside the scope of this Makefile.