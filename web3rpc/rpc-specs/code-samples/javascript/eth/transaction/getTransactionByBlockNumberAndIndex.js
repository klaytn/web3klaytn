const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");

    const blockNumber = 118593751
    const index = '0x0'
    sdk.eth.getTransactionByBlockNumberAndIndex(blockNumber, index, {}, (err, data, response) => {
        console.log(data);
    });
}
)()