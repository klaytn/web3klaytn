const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const hashrate = '0x5'
    const id = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'

    sdk.eth.submitHashrate(hashrate, id, {}, (err, data, response) => {
        console.log(data);
    });
}
)()