const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const quantity = '0xd32fd16b6906e67f6e2b65dcf48fc272'

    sdk.klay.uninstallFilter(quantity, {}, (err, data, response) => {
        console.log(data);
    });
}
)()