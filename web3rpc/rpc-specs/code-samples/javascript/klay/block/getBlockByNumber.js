const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const blockNumber = 1
    const returnTransactionObject = true
    
    sdk.klay.getBlockByNumber(blockNumber, returnTransactionObject, {}, (err, data, response) => {
        console.log(data);
    });
}
)()