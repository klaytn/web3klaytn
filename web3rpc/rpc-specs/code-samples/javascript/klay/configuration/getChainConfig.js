const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const blockNumberOrTag = 100
    provider.klay.getChainConfig({ blockNumberOrTag }, (err, data, response) => {
        console.log(data);
    });
}
)()