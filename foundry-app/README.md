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

forge create src/Whitelist.sol:Whitelist --rpc-url "$QUICKNODE_RPC_URL" --private-key "$PRIVATE_KEY" --constructor-args 10 --verify --etherscan-api-key "$ETHERSCAN_API_KEY"

forge create --rpc-url "$QUICKNODE_RPC_URL" --private-key "$PRIVATE_KEY" --broadcast --verify --etherscan-api-key "$ETHERSCAN_API_KEY" src/CryptoDevs.sol:CryptoDevs --constructor-args 0xD1Bf5C82aFCB93A6B8a347b44D0CCe730132e541

