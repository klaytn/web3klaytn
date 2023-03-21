const OpenSdk = require("opensdk-javascript");

(() => {
    const api = new OpenSdk.KlayAccountApi(new Caver.ApiClient("https://api.baobab.klaytn.net:8651"));
    const address = '0xa4f42d4d2a3a13874406435500950c9bf2d783db'
    const blockTag = 'latest'
    api.accountCreated(address, blockTag, {}, (err, data, response) => {
        console.log(data);
    });
}
)()