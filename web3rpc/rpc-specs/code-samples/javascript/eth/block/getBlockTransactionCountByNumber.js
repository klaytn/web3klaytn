const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const blockNumber = "0xe8"
    sdk.eth.getBlockTransactionCountByNumber(blockNumber, {}, (err, data, response) => {
        console.log(data);
    });
}
)()