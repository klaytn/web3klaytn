const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const level = 3;

    sdk.debug.verbosity(level, {}, (err, data, response) => {
        console.log(data);
    });
}
)()