const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const file = "mutex.profile";

    sdk.debug.writeMutexProfile(file, {}, (err, data, response) => {
        console.log(data);
    });
}
)()