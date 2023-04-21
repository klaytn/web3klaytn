const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const blockHash = "0x651722eb826af57fd95a2381c9cc0c162f90087d8283d02945c42b48229edf86";

    sdk.debug.traceBlockByHash(blockHash, {}, (err, data, response) => {
        console.log(data);
    });
}
)()