# Ethers.js Extension for Klaytn

Ethers.js Extension for Klaytn offers:

- Drop-in replacement to `ethers.Wallet` that handles both Ethereum and Klaytn transaction types
  involving AccountKey and TxTypes.
- Drop-in replacement to `ethers.JsonRpcProvider` that provides accesses to both Ethereum RPCs and
  Klaytn-specific RPCs.
- Drop-in replacement to `ethers.Web3Provider` to work with both MetaMask (`window.ethereum`) and Kaikas (`window.klaytn`)

## Install

### Node.js

- Install
    ```sh
    npm install --save @klaytn/ethers-ext
    ```
- ESM or TypeScript
    ```ts
    import { Wallet, JsonRpcProvider } from "@klaytn/ethers-ext";
    const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const wallet = new Wallet("<private key>", provider);
    ```
- CommonJS
    ```js
    const { Wallet, JsonRpcProvider } = require("@klaytn/ethers-ext");
    const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const wallet = new Wallet("<private key>", provider);
    ```

### Browser

It is not recommended to use CDNs in production, But you can use below for quick prototyping.

```html
<script src="https://cdn.jsdelivr.net/npm/@klaytn/ethers-ext@latest/dist/ethers-ext.bundle.js"></script>
<script>
const provider = new ethers_ext.providers.Web3Provider(window.klaytn);
</script>
```

## Usage

See [example](./example) and [test](./test).

## Class extension design

If diagram does not render, view it [here](https://mermaid.live/edit#pako:eNrVV02P0zAQ_SuVTyB1q35vW3FZtMsBqLSiICQIqmbtaTdqYgfbXTWU_nfcJLRx4jRZISHIpfXz84w9M36294QKhmRGaABK3fqwlhB6vGU-DiGqCCi2UD-iVK19ih-_hJ3hy4W_5ii_eiRtd9K2R77lRxy_SIonn5kuC6WPSDcfJXAFVPuCv3hZGCWibQAaL1AUclbRfaiY9GcIAtTnSadtx6Sp4BypLrpco75hTKJSpcmY5c8NDmt0dV1ahgbt09ZKivCOUxlHGtlb1Zy3iDltsvYj90NEi3mz4OaRyOBPPEkksr8SKZPwk8MLvGWAa6DxotrRMvEUR8huQUOxVzyhlKZkayqsIs73Wb2fQ_wbKUS3KlGvQWHZSB5taChLbdlWocORdZO-tCJcOWi00_BhUHacRx1ercA38XK30yg5BGVPxR6HN1_NUcMc1MbGJX7fotIO_we3Ri5xp8s6mWpL5RKrN8iJUqeRJ2IDsTyH9vIea1L7Nq-hfNUOKOqYQxBu1BvEe4jdZdmMWOH9va_0c7i1qmvpamUV1Mnoc8rlgrD-GyVVr8tn6h8LdIlXd3I4FL2gk8UsAgt9bkMMH7brgpQeZ8GBU7TxTQCxjXBzFbEvQUZchBExG9W7SIjA49WV4pbu5uqal-n_eNGldRUPhfKJ8A78DSiX8Kd_rMtv69XPqyv7alnHsm9bttHswEjoDmu2oCSskjVrwGmV-QlY14g8O9_hmrJzUHGDWAHJn_W8ftglP1ZBpgGyrOeopRwn9NJ1gJM2CVGG4DPzDkrqwCPGQogemZm_DFewDczTwOMHQ4WtFkfJJ7MVBArbZBsxo47Z0-mERsC_CGG1yWxPdmTWm_Y6_elg0r3u9Qe98bQ7apOYzMajznDS7Y-G3eFkOBiOpoc2-ZFY6HauB6Nhfzzp9Ue98XV_MmkTZL4Wcp693Y4_h18MVzCG)

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
