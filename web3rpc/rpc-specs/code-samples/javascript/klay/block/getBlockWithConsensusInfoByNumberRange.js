const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const blockHashOrBlockNumber = 1
    const range = 10
    
    sdk.klay.getBlockWithConsensusInfoByNumberRange(blockHashOrBlockNumber, range, {}, (err, data, response) => {
        console.log(data);
    });
}
)()