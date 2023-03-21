const OpenSdk = require("opensdk-javascript");

(() => {
    const api = new OpenSdk.KlayConfigurationApi(new Caver.ApiClient("https://api.baobab.klaytn.net:8651"));
    api.clientVersion({}, (err, data, response) => {
        console.log(data);
    });
}
)()