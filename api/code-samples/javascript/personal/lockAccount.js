const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const address = "0xfa415bb3e6231f488ff39eb2897db0ef3636dd32"

    sdk.personal.lockAccount(address,{}, (err, data, response) => {
        console.log(data);
    });
}
)()