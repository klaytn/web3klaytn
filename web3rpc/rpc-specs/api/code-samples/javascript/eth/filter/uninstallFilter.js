const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const filterId = '0xb'

    sdk.eth.uninstallFilter(filterId, {}, (err, data, response) => {
        console.log(data);
    });
}
)()