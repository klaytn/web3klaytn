const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const name = "API";
    const level = 1;

    sdk.debug.verbosityByName(name, level, {}, (err, data, response) => {
        console.log(data);
    });
}
)()