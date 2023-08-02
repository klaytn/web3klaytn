const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const percent = 100;
    
    sdk.debug.setGCPercent(percent, {}, (err, data, response) => {
        console.log(data);
    });
}
)()