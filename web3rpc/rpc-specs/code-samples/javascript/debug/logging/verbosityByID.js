const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const id = 1;
    const level = 3;

    sdk.debug.verbosityByID(id, level, {}, (err, data, response) => {
        console.log(data);
    });
}
)()