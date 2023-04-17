const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const block = "latest";

    sdk.governance.getStakingInfo(block, {}, (err, data, response) => {
        console.log(data);
    });
}
)()