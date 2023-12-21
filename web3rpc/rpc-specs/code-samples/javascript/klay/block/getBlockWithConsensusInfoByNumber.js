const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const blockNumber = 1;

    provider.klay.getBlockWithConsensusInfoByNumber(blockNumber, {}, (err, data, response) => {
        console.log(data);
    });
}
)()