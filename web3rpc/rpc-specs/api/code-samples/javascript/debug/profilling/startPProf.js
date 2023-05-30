const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const address = "localhost";
    const port = 6060;
    
    sdk.debug.startPProf({address, port}, (err, data, response) => {
        console.log(data);
    });
}
)()