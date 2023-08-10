const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const firstBlock = 123400489;
    const lastBlock = 123416489;

    sdk.governance.getRewardsAccumulated(firstBlock, lastBlock, {}, (err, data, response) => {
        console.log(data);
    });
}
)()