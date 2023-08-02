const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const quantity = "0x16"
    sdk.klay.getFilterLogs(quantity, {}, (err, data, response) => {
        console.log(data);
    });
}
)()