const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const transactionHash = '0x21b2919b89278ca786226f10edbaadced7381dbd73df546a4823547aaebffa58'

    sdk.klay.getTransactionByHash(transactionHash, {}, (err, data, response) => {
        console.log(data);
    });
}
)()