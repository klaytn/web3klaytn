const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    const blockNumber = 118593751
    const transactionIndexPosition = '0x0'
    
    sdk.klay.getRawTransactionByBlockNumberAndIndex(blockNumber, transactionIndexPosition, {}, (err, data, response) => {
        console.log(data);
    });
}
)()