const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new Caver.ApiClient("https://api.baobab.klaytn.net:8651"));


    const blockNumber = 118593751
    const transactionIndexPosition = '0x0'

    sdk.klay.getTransactionByBlockNumberAndIndex(blockNumber, transactionIndexPosition, {}, (err, data, response) => {
        console.log(data);
    });

}
)()