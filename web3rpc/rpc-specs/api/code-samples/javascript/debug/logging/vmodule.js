const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const module = "p2p=4";

    sdk.debug.vmodule(module, {}, (err, data, response) => {
        console.log(data);
    });
}
)()