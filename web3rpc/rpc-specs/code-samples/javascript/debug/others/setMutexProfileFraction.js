const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const rate = 2;

    sdk.debug.setMutexProfileFraction(rate, {}, (err, data, response) => {
        console.log(data);
    });
}
)()