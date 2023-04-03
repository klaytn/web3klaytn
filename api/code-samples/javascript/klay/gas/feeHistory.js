const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new Caver.ApiClient("https://api.baobab.klaytn.net:8651"));

    const blockCount = '0x10'
    const lastBlock = 'latest'
    const rewardPercentiles = [0.1, 0.2, 0.3]
    sdk.klay.feeHistory(blockCount,lastBlock,rewardPercentiles,{}, (err, data, response) => {
        console.log(data);
    });
   
}
)()