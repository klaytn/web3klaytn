const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const url = "url";
    const path = "path";
    const pin = true;

    sdk.personal.deriveAccount(url, path, {pin}, (err, data, response) => {
        console.log(data);
    });
}
)()

