const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const rate = 3;

    sdk.debug.setBlockProfileRate(rate, {}, (err, data, response) => {
        console.log(data);
    });
}
)()
