const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");

    const blockNumber = 118593751
    const transactionIndexPosition = '0x0'

    provider.klay.getTransactionByBlockNumberAndIndex(blockNumber, transactionIndexPosition, {}, (err, data, response) => {
        console.log(data);
    });

}
)()