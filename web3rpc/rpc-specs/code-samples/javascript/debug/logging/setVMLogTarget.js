const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const target = 3;

    sdk.debug.setVMLogTarget(target, {}, (err, data, response) => {
        console.log(data);
    });
}
)()