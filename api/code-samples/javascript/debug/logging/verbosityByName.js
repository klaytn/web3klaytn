const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const name = "API";
    const level = 1;

    sdk.debug.verbosityByName(name, level, {}, (err, data, response) => {
        console.log(data);
    });
}
)()