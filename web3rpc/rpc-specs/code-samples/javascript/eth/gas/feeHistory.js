const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const blockCount = '0x10'
    const lastBlock = 'latest'
    const rewardPercentiles = [0.1, 0.2, 0.3]
    
    sdk.eth.feeHistory(blockCount, lastBlock, rewardPercentiles, {}, (err, data, response) => {
        console.log(data);
    });
}
)()