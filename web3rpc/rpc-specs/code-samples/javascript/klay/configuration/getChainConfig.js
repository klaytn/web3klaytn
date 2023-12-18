const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const blockNumberOrTag = 100
    sdk.klay.getChainConfig({ blockNumberOrTag }, (err, data, response) => {
        console.log(data);
    });
}
)()