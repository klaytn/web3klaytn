const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const address = ['0xfdeedbb2fe5b48d5b49e435ba00e0358740d0cf5']
    sdk.admin.setSpamThrottlerWhiteList(address, {}, (err, data, response) => {
        console.log(data);
    });
}
)()