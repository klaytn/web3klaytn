const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const file = "cpu.profile";

    sdk.debug.startCPUProfile(file, {}, (err, data, response) => {
        console.log(data);
    });
}
)()