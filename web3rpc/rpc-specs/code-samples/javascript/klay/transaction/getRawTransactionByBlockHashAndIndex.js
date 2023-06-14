const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const blockHash = '0x4c4cbf242a80183d2ea2daf047c578d5fc89c0b14c4262606c8b6bb0b36715be'
    const transactionIndexPosition = '0x0'
    
    sdk.klay.getRawTransactionByBlockHashAndIndex(blockHash, transactionIndexPosition, {}, (err, data, response) => {
        console.log(data);
    });
}
)()