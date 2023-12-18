const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const startBlock = 21;
    const endBlock = 30;

    sdk.debug.traceBlockByNumberRange(startBlock, endBlock, {}, (err, data, response) => {
        console.log(data);
    });
}
)()