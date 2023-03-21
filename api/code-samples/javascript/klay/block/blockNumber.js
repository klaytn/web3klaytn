const OpenSdk = require("opensdk-javascript");

(() => {
    const api = new OpenSdk.KlayBlockApi(new Caver.ApiClient("https://api.baobab.klaytn.net:8651"));
    api.klayBlockNumber({}, (err, data, response) => {
        console.log(data);
    });
}
)()