const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const transactionHash = '0xc6acc62baaa57483da8d5e08aaed1907d82f0e25bd553ce3745ef1bc7b7f4476'
    sdk.eth.getTransactionByHash(transactionHash, {}, (err, data, response) => {
        console.log(data);
    });
}
)()