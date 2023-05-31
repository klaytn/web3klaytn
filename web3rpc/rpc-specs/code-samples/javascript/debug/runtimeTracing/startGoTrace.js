const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const file = "go.trace";

    sdk.debug.startGoTrace(file, {}, (err, data, response) => {
        console.log(data);
    });
}
)()
