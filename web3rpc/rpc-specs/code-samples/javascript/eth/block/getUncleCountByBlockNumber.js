const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");

    const blockNumber = 119189116
    
    sdk.eth.getUncleCountByBlockNumber(blockNumber, {}, (err, data, response) => {
        console.log(data);
    });
}
)()