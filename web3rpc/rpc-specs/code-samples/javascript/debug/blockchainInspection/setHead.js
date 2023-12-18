const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const number = "0x100"

    sdk.debug.setHead(number, {}, (err, data, response) => {
        console.log(data);
    });
}
)()