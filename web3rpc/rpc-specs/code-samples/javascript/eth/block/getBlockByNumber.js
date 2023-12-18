const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");

    const blockNumber = 1
    const transactionObject = true
    sdk.eth.getBlockByNumber(blockNumber, transactionObject, {}, (err, data, response) => {
        console.log(data);
    });

}
)()