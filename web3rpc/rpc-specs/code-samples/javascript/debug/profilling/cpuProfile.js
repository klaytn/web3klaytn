const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const file = "block.profile";
    const seconds = 10;

    sdk.debug.cpuProfile(file, seconds, {}, (err, data, response) => {
        console.log(data);
    });
}
)()