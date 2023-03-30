const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new Caver.ApiClient("https://api.baobab.klaytn.net:8651"));

    const blockNumber = 1;

    sdk.klay.getBlockWithConsensusInfoByNumber(blockNumber, {}, (err, data, response) => {
        console.log(data);
    });
}
)()