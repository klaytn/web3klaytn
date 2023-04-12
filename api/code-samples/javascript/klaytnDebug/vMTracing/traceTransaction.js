const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const txHash = "0x07f6057bc93aca52e53cdbfac9b9830f6a9cae2b3f48f0b47e4cb54959143d09";

    sdk.debug.traceTransaction(txHash, {}, (err, data, response) => {
        console.log(data);
    });
}
)()