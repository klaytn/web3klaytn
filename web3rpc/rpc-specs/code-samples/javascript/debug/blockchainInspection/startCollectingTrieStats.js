const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const address = "0x0000000000000000000000000000000000000000"

    sdk.debug.startCollectingTrieStats(address, {}, (err, data, response) => {
        console.log(data);
    });
}
)()