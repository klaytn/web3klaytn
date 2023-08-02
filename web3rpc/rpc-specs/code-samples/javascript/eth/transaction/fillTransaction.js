const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const transactionArgs = {
        "from": "0x51239f87c33e95e3bdb72e31d06b5306bcec81cc",
        "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
        "value": "0x1",
        "gas": "0x9999",
        "maxFeePerGas": "0xbb43b7400"
    }

    sdk.eth.fillTransaction(transactionArgs, {}, (err, data, response) => {
        console.log(data);
    });

}
)()