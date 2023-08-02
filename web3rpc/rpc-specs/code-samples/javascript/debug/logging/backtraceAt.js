const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const location = "server.go:443";

    sdk.debug.backtraceAt(location, {}, (err, data, response) => {
        console.log(data);
    });
}
)()