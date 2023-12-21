const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const number = "0x100"

    provider.debug.setHead(number, {}, (err, data, response) => {
        console.log(data);
    });
}
)()