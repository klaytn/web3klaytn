const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new Caver.ApiClient("https://api.baobab.klaytn.net:8651"));

    const blockNumber = 1
    const returnTransactionObject = true
    
    sdk.klay.getBlockByNumber(blockNumber, returnTransactionObject, {}, (err, data, response) => {
        console.log(data);
    });
}
)()