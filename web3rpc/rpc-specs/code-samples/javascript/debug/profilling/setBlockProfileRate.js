const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const rate = 3;

    provider.debug.setBlockProfileRate(rate, {}, (err, data, response) => {
        console.log(data);
    });
}
)()
