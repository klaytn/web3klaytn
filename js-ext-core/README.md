# JavaScript Extension Core for Klaytn

Sub-components of Klaytn JavaScript SDKs.

For dApp developers and blockchain users, use the SDKs like [@klaytn/ethers-ext](https://www.npmjs.com/package/@klaytn/ethers-ext) and [@klaytn/web3js-ext](https://www.npmjs.com/package/@klaytn/web3js-ext).

- `FieldSetFactory` to easily build custom RLP-encodable types
- `AccountKeyFactory` for Klaytn account objects
- `KlaytnTxFactory` for Klaytn transaction objects
- `AccountKeyType` and `TxType` enums
- `decryptKeystoreList` for decrypting KIP-3 JSON keystore
- `getRpcTxObject` to normalize `eth_call` RPC parameters
- `getCompressedPublicKey` and `getSignatureTuple` to normalize cryptographic data
- `formatKlay` and `parseKlay` to convert KLAY denominations
- `asyncOpenApi` to promisify [@klaytn/web3rpc](https://www.npmjs.com/package/@klaytn/web3rpc) methods

## Install

```
npm install --save @klaytn/js-ext-core
```

## Usage

See test.

