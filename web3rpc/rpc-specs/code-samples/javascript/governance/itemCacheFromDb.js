const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const blockNumber = 0;

    sdk.governance.itemCacheFromDb(blockNumber, {}, (err, data, response) => {
        console.log(data);
    });
}
)()