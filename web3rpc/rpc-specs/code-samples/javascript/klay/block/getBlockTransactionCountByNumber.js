const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const blockNumber = 1
    sdk.klay.getBlockTransactionCountByNumber(blockNumber, {}, (err, data, response) => {
        console.log(data);
    });


}
)()