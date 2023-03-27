const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new Caver.ApiClient("https://api.baobab.klaytn.net:8651"));

    sdk.klay.accounts({}, (err, data, response) => {
        console.log(data);
    });
}
)()