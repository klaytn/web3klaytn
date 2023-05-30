const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const level = 3;

    sdk.debug.verbosity(level, {}, (err, data, response) => {
        console.log(data);
    });
}
)()