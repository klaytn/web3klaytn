const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const blockNumber = 119189116
    const uncleIndex = '0x1'

    sdk.eth.getUncleByBlockNumberAndIndex(blockNumber, uncleIndex, {}, (err, data, response) => {
        console.log(data);
    });

}
)()