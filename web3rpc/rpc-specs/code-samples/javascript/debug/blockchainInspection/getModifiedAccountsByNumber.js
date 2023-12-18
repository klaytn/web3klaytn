const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const startBlockNum = 171904
    const endBlockNum = 172160

    sdk.debug.getModifiedAccountsByNumber(startBlockNum, {endBlockNum}, (err, data, response) => {
        console.log(data);
    });
}
)()