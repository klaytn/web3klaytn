const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const filterId = '0xb'

    sdk.eth.uninstallFilter(filterId, {}, (err, data, response) => {
        console.log(data);
    });
}
)()