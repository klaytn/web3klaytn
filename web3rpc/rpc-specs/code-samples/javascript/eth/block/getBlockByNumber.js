const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    const blockNumber = 1
    const transactionObject = true
    sdk.eth.getBlockByNumber(blockNumber, transactionObject, {}, (err, data, response) => {
        console.log(data);
    });

}
)()