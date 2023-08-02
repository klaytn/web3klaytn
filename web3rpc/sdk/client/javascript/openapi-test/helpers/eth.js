const OpenSdk = require("@klaytn/web3rpc");
const Web3 = require('web3');
const crypto = require("crypto");

const { RPC, PN_RPC } = require("../test/constant");

const sdk_PN = new OpenSdk(new OpenSdk.ApiClient(PN_RPC));
const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));
const web3 = new Web3(RPC);

const address = '0x413ba0e5f6f00664598b5c80042b1308f4ff1408'

const passphrase = 'helloWorld'

const addressPN = '0x65b47be3457ff26f2911cf89fd079cef0475a2e6' // address in PN server
const passphrasePN = 'helloWorld'

export const getEthFilterId = () => {
    return new Promise((res, ej) => {
        const opts = {
            "fromBlock": "earliest",
            "toBlock": "latest",
            "address": "0x87ac99835e67168d4f9a40580f8f5c33550ba88b",
            "topics": [
                "0xd596fdad182d29130ce218f4c1590c4b5ede105bee36690727baa6592bd2bfc8"
            ]
        }
        sdk.eth.newFilter(opts, {}, (error, data, response) => {
            if (error) ej(error)
            return res(data)
        });
    })
}
export const getRawTransaction = async (nonce) => {
    return new Promise((res, ej) => {
        sdk.klay.signTransaction({
            "from": address,
            "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
            "value": "0x1",
            "gas": "0x9999",
            nonce
        }, {}, (err, data) => {
            if (err) return reject(err)
            return res(data.raw)
        });
    })
}
export const signTxEth = (nonce) => {
    return new Promise((res, ej) => {
        sdk.eth.signTransaction({
            "from": address,
            "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
            "value": "0x1",
            "gas": "0x9999",
            "maxFeePerGas": "0x5d21dba00",
            "maxPriorityFeePerGas": "0x5d21dba00",
            nonce
        }, {}, (err, data) => {
            if (err) return reject(err)
            return res(data.raw)
        });
    })
}
export const unlockAccount = () => {
    return new Promise((res, ej) => {

        sdk.personal.unlockAccount(address, passphrase, { duration: 300 }, (err, data, resp) => {
            if (err) return ej(err)
            return res(address)
        })
    })
}
export const getNonce = (address) => {
    return new Promise((res, ej) => {
        sdk.eth.getTransactionCount(address, 'latest', {}, (err, data, resp) => {
            if (err) return ej(err)
            return res(data)
        })
    })
}
export const getFeePayerSignatures = async (tx) => {
    return new Promise((resolve, reject) => {
        sdk.klay.signTransaction(tx, {}, (err, data) => {
            if (err) return reject(err)
            return resolve(data.tx)
        });
    })
}
export const unlockAccountPN = () => {
    return new Promise((res, ej) => {
        sdk_PN.personal.unlockAccount(addressPN, passphrasePN, { duration: 300 }, (err, data, resp) => {
            if (err) return ej(err)
            return res(addressPN)
        })
    })
}
export const sendTransactionPN = (address) => {
    return new Promise((res, ej) => {
        sdk_PN.klay.sendTransaction({
            "from": address,
            "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
            "value": "0x1",
            "gas": "0x9999",
            "maxFeePerGas": "0x5d21dba00",
            "maxPriorityFeePerGas": "0x5d21dba00"
        }, {}, (err, data, resp) => {
            if (err) return ej(err)
            return res(data);
        });
    })
}
export const getNoncePending = () => {
    return new Promise((res, ej) => {
        sdk_PN.eth.pendingTransactions({}, (err, data, resp) => {
            if (err) return ej(err)
            return res(data.reverse()[0].nonce)
        })
    })
}

export const genHexString = () => {
  const randomBytes = crypto.randomBytes(32);
  let hexString = randomBytes.toString("hex");
  return hexString;
};

export const getEthFilterIdPNNode = () => {
    return new Promise((res, ej) => {
        const opts = {
            "fromBlock": "earliest",
            "toBlock": "latest",
            "address": "0x87ac99835e67168d4f9a40580f8f5c33550ba88b",
            "topics": [
                "0xd596fdad182d29130ce218f4c1590c4b5ede105bee36690727baa6592bd2bfc8"
            ]
        }
        sdk_PN.eth.newFilter(opts, {}, (error, data, response) => {
            if (error) ej(error)
            return res(data)
        });
    })
}