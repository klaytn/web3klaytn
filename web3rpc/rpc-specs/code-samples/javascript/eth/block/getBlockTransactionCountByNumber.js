const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const blockNumber = "0xe8"
    sdk.eth.getBlockTransactionCountByNumber(blockNumber, {}, (err, data, response) => {
        console.log(data);
    });
}
)()