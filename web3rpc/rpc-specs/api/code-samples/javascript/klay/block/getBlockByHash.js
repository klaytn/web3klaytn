
const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    const blockHash = '0xba647d41423faeebe8a7c64737d284fc2eba6f0388a3e1ebf6243db509ec1577'
    const returnTransactionObject = true
    
    sdk.klay.getBlockByHash(blockHash, returnTransactionObject, {}, (err, data, response) => {
        console.log(data);
    });
}
)()