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

## Class extension design

```mermaid
classDiagram
    namespace ethers {
        class ethers_Signer["ethers.Signer"] {
            provider
            checkTransaction()
            populateTransaction()
            sendTransaction()
        }
        class ethers_Wallet["ethers.Wallet"] {
            connect()
            getAddress()
            signMessage()
            signTransaction()
            static fromEncryptedJson()
            static fromEncryptedJsonSync()
        }
        class ethers_JsonRpcSigner["ethers.JsonRpcSigner"] {
            connect()
            connectUnchecked()
            getAddress()
            signMessage()
            signTransaction()
            sendUncheckedTransaction()
            _legacySignMessage()
            _signTypedData()
            override sendTransaction()
        }

        class ethers_Provider["ethers.Provider"] {
        }
        class ethers_BaseProvider["ethers.BaseProvider"] {
        }
        class ethers_JsonRpcProvider["ethers.JsonRpcProvider"] {
            getSigner()
            send()
        }
        class ethers_Web3Provider["ethers.Web3Provider"] {
            override send()
        }
        class ethers_ExternalProvider["ethers.ExternalProvider"] {
            isMetaMask
            request()
        }
    }
    namespace ethers_ext {
        class Wallet {
            override getAddress()
            override checkTransaction()
            override populateTransaction()
            override signTransaction()
            override sendTransaction()
            override static fromEncryptedJson()
            override static fromEncryptedJsonSync()
            signTransactionAsFeePayer()
            sendTransactionAsFeePayer()
            static fromEncryptedJsonList()
            static fromEncryptedJsonListSync()
        }
        class JsonRpcSigner {
            override connectUnchecked()
            override getAddress()
            override signMessage()
            override checkTransaction()
            override populateTransaction()
            override signTransaction()
            override _legacySignMessage()
            override _signTypedData()
            override sendTransaction()
            override sendUncheckedTransaction()
        }

        class JsonRpcProvider {
            admin
            debug
            governance
            klay
            net
            personal
            txpool

            override getSigner()
            override send()
        }
        class Web3Provider {
            admin
            debug
            governance
            klay
            net
            personal
            txpool

            override getSigner()
        }
        class ExternalProvider {
            isKaikas
        }
    }

    ethers_Signer <|-- ethers_Wallet
    ethers_Signer <|-- ethers_JsonRpcSigner

    ethers_Wallet <|-- Wallet
    ethers_JsonRpcSigner <|-- JsonRpcSigner


    ethers_Provider <|-- ethers_BaseProvider
    ethers_BaseProvider <|-- ethers_JsonRpcProvider
    ethers_JsonRpcProvider <|-- ethers_Web3Provider

    ethers_JsonRpcProvider <|-- JsonRpcProvider
    ethers_Web3Provider <|-- Web3Provider
    ethers_ExternalProvider <|-- ExternalProvider

```
