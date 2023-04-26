const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const number = 2;

    sdk.debug.setMutexProfileFractionoperty(number, {}, (err, data, response) => {
        console.log(data);
    });
}
)()