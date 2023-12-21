const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const startBlock = 21;
    const endBlock = 30;

    provider.debug.traceBlockByNumberRange(startBlock, endBlock, {}, (err, data, response) => {
        console.log(data);
    });
}
)()