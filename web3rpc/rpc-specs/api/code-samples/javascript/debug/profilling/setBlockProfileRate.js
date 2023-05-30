const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const rate = 3;

    sdk.debug.setBlockProfileRate(rate, {}, (err, data, response) => {
        console.log(data);
    });
}
)()
