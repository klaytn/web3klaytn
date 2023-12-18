const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");

    const blockNumber = 118593751
    const transactionIndexPosition = '0x0'
    
    sdk.klay.getRawTransactionByBlockNumberAndIndex(blockNumber, transactionIndexPosition, {}, (err, data, response) => {
        console.log(data);
    });
}
)()