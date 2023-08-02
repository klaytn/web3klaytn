const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const txHash = "0x344fc43b5b87984d5a50fe2c54e121f94945ba9ff9da20f9de0f1b4914f47055";

    sdk.debug.traceTransaction(txHash, {}, (err, data, response) => {
        console.log(data);
    });
}
)()