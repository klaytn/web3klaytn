const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const target = 3;

    sdk.debug.setVMLogTarget(target, {}, (err, data, response) => {
        console.log(data);
    });
}
)()