const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const blockNumberOrTag = 100
    sdk.klay.getChainConfig({ blockNumberOrTag }, (err, data, response) => {
        console.log(data);
    });
}
)()