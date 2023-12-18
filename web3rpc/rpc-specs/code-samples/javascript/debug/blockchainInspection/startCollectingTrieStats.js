const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const address = "0x0000000000000000000000000000000000000000"

    sdk.debug.startCollectingTrieStats(address, {}, (err, data, response) => {
        console.log(data);
    });
}
)()