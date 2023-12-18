const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const quantity = "0x16"
    sdk.klay.getFilterLogs(quantity, {}, (err, data, response) => {
        console.log(data);
    });
}
)()