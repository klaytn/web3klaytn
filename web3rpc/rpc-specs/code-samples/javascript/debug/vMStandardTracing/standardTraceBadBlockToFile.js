const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const blockHash = "0x1d5ba00e313a81ae6d409d459c153327072665d9ea2f47608369722baf0cfbb6"
    
    sdk.debug.standardTraceBadBlockToFile(blockHash, {}, (err, data, response) => {
        console.log(data);
    });
}
)()