const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const forkNumber = 20
    
    sdk.klay.forkStatus(forkNumber, {}, (err, data, response) => {
        console.log(data);
    });
}
)()