const OpenSdk = require("@klaytn/web3rpc");

const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    sdk.admin.stopSpamThrottler({}, (err, data, response) => {
        console.log(data);
    });
}
)()