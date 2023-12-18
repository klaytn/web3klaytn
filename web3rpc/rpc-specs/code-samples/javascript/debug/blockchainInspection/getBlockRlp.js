const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const blockNumber = "200"
    
    sdk.debug.getBlockRlp(blockNumber, {}, (err, data, response) => {
        console.log(data);
    });
}
)()