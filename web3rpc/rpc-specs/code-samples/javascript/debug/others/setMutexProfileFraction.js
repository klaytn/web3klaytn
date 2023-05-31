const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const rate = 2;

    sdk.debug.setMutexProfileFraction(rate, {}, (err, data, response) => {
        console.log(data);
    });
}
)()