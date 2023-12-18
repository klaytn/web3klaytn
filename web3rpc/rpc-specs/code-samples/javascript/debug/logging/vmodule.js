const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const module = "p2p=4";

    sdk.debug.vmodule(module, {}, (err, data, response) => {
        console.log(data);
    });
}
)()