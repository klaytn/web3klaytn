const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const block = 2459;

    sdk.debug.traceBlockByNumber(block, {}, (err, data, response) => {
        console.log(data);
    });
}
)()