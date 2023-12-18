const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const blockNumber = 119189116
    const uncleIndex = '0x1'

    sdk.eth.getUncleByBlockNumberAndIndex(blockNumber, uncleIndex, {}, (err, data, response) => {
        console.log(data);
    });

}
)()