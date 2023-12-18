const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const blockNumber = "0x80";

    sdk.debug.printBlock(blockNumber, {}, (err, data, response) => {
        console.log(data);
    });
}
)()