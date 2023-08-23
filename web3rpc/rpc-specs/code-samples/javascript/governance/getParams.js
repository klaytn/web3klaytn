const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const blockNumber = 89;

    sdk.governance.getParams(blockNumber, {}, (err, data, response) => {
        console.log(data);
    });
}
)()