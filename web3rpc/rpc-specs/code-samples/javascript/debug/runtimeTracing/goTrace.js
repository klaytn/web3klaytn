const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const file = "go.trace";
    const seconds = 5;

    sdk.debug.goTrace(file, seconds, {}, (err, data, response) => {
        console.log(data);
    });
}
)()