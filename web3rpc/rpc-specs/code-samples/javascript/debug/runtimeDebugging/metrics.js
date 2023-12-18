const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const raw = true;
    
    sdk.debug.metrics(raw, {}, (err, data, response) => {
        console.log(data);
    });
}
)()