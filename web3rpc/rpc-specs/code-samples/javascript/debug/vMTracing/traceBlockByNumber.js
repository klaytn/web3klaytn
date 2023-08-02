const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const block = 2459;

    sdk.debug.traceBlockByNumber(block, {}, (err, data, response) => {
        console.log(data);
    });
}
)()