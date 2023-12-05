# Ethers.js Extension for Klaytn

Ethers.js Extension for Klaytn offers:

- Drop-in replacement to `ethers.Wallet` that handles both Ethereum and Klaytn transactions
  involving AccountKey and TxTypes.
- Drop-in replacement to `ethers.JsonRpcProvider` that provides Ethereum RPC as well as
  Klaytn-specific RPCs.
- AccountStore to manage Klaytn account keys.

## Install

```
npm install --save @klaytn/ethers-ext
```

## Usage

See [example](./example) and [test](./test).


## Build

- Install dependencies

    ```
    npm install
    ```

- Build the library

    ```
    npm run build
    ```

- Run examples

    ```
    node example/rpc/rpc.js
    ```

## Core classes

```mermaid
classDiagram
  FieldType ..|> FieldTypeBytes
  FieldType ..|> FieldTypeSignatureTuples
  FieldType ..|> FieldTypeAccountKey
  FieldType ..|> etc
  class FieldType {
    <<interface>>
    canonicalize(any): any
    emptyValue(): any
  }
  class FieldTypeBytes {
    canonicalize(any): string
    emptyValue(): string
  }
  class FieldTypeSignatureTuples {
    canonicalize( SignatureLike[]): SignatureTuple[]
    emptyValue(): SignatureTuple[]
  }
  class FieldTypeAccountKey {
    canonicalize(TypedAccountKey | string | any): string
    emptyValue(): string
  }
```

```mermaid
classDiagram
  FieldSet <|-- KlaytnTx
  KlaytnTx <|-- TxTypeValueTransfer
  KlaytnTx <|-- TxTypeFeeDelegatedValueTransfer
  KlaytnTx <|-- other TxTypes
  FieldSet <|-- AccountKey
  AccountKey <|-- AccountKeyLegacy
  AccountKey <|-- AccountKeyPublic
  AccountKey <|-- other AccountKey
  class FieldSet {
    type: number
    typeName: string
    fieldTypes: string -> FieldType
    setFields(any)
    setFieldsFromArray( string[], any[] )
    getField( string ): any
    getFields( string[] ): any[]
    toObject(): any
  }
  class KlaytnTx {
    sigRLP(): string
    sigFeePayerRLP(): string
    senderTxHashRLP(): string
    txHashRLP(): string
    addSenderSig(sig)
    addFeePayerSig(sig)
    setFieldsFromRLP(string): void
  }
  class AccountKey {
    toRLP(): string
  }
```

```mermaid
classDiagram
  FieldSetFactory <|.. KlaytnTxFactory
  FieldSetFactory <|.. AccountKeyFactory
  class FieldSetFactory {
    private registry: [number] -> FieldSet
    private requiredFields: string[]
    add(typeof T)
    has(type?): boolean
    lookup(type?): typeof T
    fromObject(any): T
  }
  class KlaytnTxFactory {
    fromRLP(string): KlaytnTx
  }
  class AccountKeyFactory {
  }
```

## ethers extension classes

```mermaid
classDiagram
  ethers_Wallet <|-- KlaytnWallet
  ethers_Signer <|-- ethers_Wallet
  class ethers_Signer {
    provider
    abstract getAddress()
    abstract signMessage()
    abstract signTransaction()
    sendTransaction()
  }
  class ethers_Wallet {
    address
    privateKey
    getAddress()
    signMessage()
    signTransaction()
    checkTransaction()
    populateTransaction()
    sendTransaction()
  }
  class KlaytnWallet {
    signTransaction()
    checkTransaction()
    populateTransaction()
    sendTransaction()
  }

  ethers_Provider <|-- ethers_BaseProvider
  ethers_BaseProvider <|-- ethers_JsonRpcProvider
  ethers_JsonRpcProvider <|-- KlaytnJsonRpcProvider
  class ethers_Provider {
    abstract sendTransaction()
    abstract call()
    abstract estimateGas()
  }
  class ethers_BaseProvider {
    sendTransaction()
    waitForTransaction()
  }
  class ethers_JsonRpcProvider {
    perform()
    send()
    prepareRequest() // "eth_sendRawTransaction"
  }
  class KlaytnJsonRpcProvider {
    sendTransaction()
    prepareRequest() // "klay_sendRawTransaction"
  }
```
