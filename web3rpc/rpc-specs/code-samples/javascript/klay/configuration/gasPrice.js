const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    sdk.klay.gasPrice({}, (err, data, response) => {
        console.log(data);
    });
}
)()