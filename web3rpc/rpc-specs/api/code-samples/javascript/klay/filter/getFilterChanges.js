const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const quantity = "0x16"
    sdk.klay.getFilterChanges(quantity, {}, (err, data, response) => {
        console.log(data);
    });
}
)()