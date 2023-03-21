const OpenSdk = require("opensdk-javascript");

(() => {
    const api = new OpenSdk.KlayBlockApi(new Caver.ApiClient("https://api.baobab.klaytn.net:8651"));
    api.blockNumber({}, (err, data, response) => {
        console.log(data);
    });
}
)()