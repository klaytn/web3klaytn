const OpenSdk = require("opensdk-javascript");

(() => {
    const api = new OpenSdk.KlayConfigurationApi(new Caver.ApiClient("https://api.baobab.klaytn.net:8651"));
    api.chainId({}, (err, data, response) => {
        console.log(data);
    });
}
)()