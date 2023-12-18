const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const percent = 100;
    
    sdk.debug.setGCPercent(percent, {}, (err, data, response) => {
        console.log(data);
    });
}
)()