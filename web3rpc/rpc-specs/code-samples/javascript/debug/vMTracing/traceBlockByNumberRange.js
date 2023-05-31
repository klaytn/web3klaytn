const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const startBlock = 21;
    const endBlock = 30;

    sdk.debug.traceBlockByNumberRange(startBlock, endBlock, {}, (err, data, response) => {
        console.log(data);
    });
}
)()