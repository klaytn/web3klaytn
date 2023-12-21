const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const blockNumber = "0xe8"
    provider.eth.getBlockTransactionCountByNumber(blockNumber, {}, (err, data, response) => {
        console.log(data);
    });
}
)()