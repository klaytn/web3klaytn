const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new Caver.ApiClient("https://api.baobab.klaytn.net:8651"));

    const accountKey = { "keyType": 0, "key": {} }

    sdk.klay.encodeAccountKey(accountKey, {}, (err, data, response) => {
        console.log(data);
    });
}
)()