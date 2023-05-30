const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const blockHashOrBlockNumber = 1
    const range = 10
    
    sdk.klay.getBlockWithConsensusInfoByNumberRange(blockHashOrBlockNumber, range, {}, (err, data, response) => {
        console.log(data);
    });
}
)()