const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    const blockHash = '0xb8deae63002d2b6aa33247c8ef545383ee0fd2282ac9b49dbbb74114389ddb5c'
    const transactionObject = true
    sdk.eth.getBlockByHash(blockHash, transactionObject, {}, (err, data, response) => {
        console.log(data);
    });
}
)()