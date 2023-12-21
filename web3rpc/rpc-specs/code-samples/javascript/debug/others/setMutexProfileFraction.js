const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const rate = 2;

    provider.debug.setMutexProfileFraction(rate, {}, (err, data, response) => {
        console.log(data);
    });
}
)()