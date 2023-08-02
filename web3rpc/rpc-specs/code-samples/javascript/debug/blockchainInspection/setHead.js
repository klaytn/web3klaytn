const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const number = "0x100"

    sdk.debug.setHead(number, {}, (err, data, response) => {
        console.log(data);
    });
}
)()