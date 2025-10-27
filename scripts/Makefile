# Common Web3 Dev Tasks

anvil:
	anvil -p 8545

forge-build:
	cd foundry-app && forge build

forge-test:
	cd foundry-app && forge test -vvv

# Expects RPC_URL and PRIVATE_KEY in env (local-only, do not commit secrets)
deploy-local:
	cd foundry-app && forge script script/Counter.s.sol:CounterScript --rpc-url ${RPC_URL} --private-key ${PRIVATE_KEY} --broadcast

# Frontend dev servers
# Adjust package managers if you prefer pnpm

dev-next:
	cd nextjs-app && yarn install && yarn dev

dev-vite:
	cd vite-dapp && yarn install && yarn dev

# Optional utility targets
clean:
	cd foundry-app && forge clean || true
	cd nextjs-app && git clean -fdx || true
	cd vite-dapp && git clean -fdx || true