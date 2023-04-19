const OpenSdk = require("opensdk-javascript");
const Web3 = require('web3');

const { RPC } = require("../test/constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));
const web3 = new Web3(RPC);

const address = '0x487f2dfef230c2120b8cc55c5087b103146536ec'
const passphrase = 'helloWorld'

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
            return res(data.result)
        });
    })
}
export const getRawTransaction = async () => {
    const privateKey = '6cb442edb31d8a1c753f0c3c675588fceb4d82435a1c03b8bb92a5a9274ebbe0';

    const fromAddress = '0xA1ee5975cfa2180450AeD555Ba06AB8108a87D4A';

    const toAddress = '0x0123456789abcdef0123456789abcdef01234568';

    const gasPrice = "0xba43b7400"

    const gasLimit = 21000;

    const value = web3.utils.toWei('0.001', 'ether');

    const data = '';

    return new Promise((res, ej) => {
        web3.eth.getTransactionCount(fromAddress, 'pending', async (error, nonce) => {
            const txObject = {
                'from': fromAddress,
                'nonce': nonce,
                'gasPrice': gasPrice,
                'gasLimit': gasLimit,
                'to': toAddress,
                'value': value,
                'data': data,
                "maxPriorityPerGas": "0x5d21dba00",
            };
            const signedTx = await web3.eth.accounts.signTransaction(txObject, privateKey);
            return res(signedTx)
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
            return res(data.result)
        })
    })
}
export const getFeePayerSignatures = async (tx) => {
    return new Promise((resolve, reject) => {
        sdk.klay.signTransaction(tx, {}, (err, data) => {
            if (err) return reject(err)
            return resolve(data.result.tx)
        });
    })
}