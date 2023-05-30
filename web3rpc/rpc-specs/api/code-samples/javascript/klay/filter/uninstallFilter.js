const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const quantity = '0xd32fd16b6906e67f6e2b65dcf48fc272'

    sdk.klay.uninstallFilter(quantity, {}, (err, data, response) => {
        console.log(data);
    });
}
)()