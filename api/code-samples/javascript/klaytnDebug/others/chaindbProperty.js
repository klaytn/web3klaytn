const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const property = "0xe17d821e9a8a8736b9aea8c2de1f3a4934ac0a2f";

    sdk.debug.chaindbProperty(property, {}, (err, data, response) => {
        console.log(data);
    });
}
)()