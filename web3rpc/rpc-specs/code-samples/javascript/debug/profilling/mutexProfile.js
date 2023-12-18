const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const file = "mutex.profile";
    const seconds = 10;

    sdk.debug.mutexProfile(file, seconds, {}, (err, data, response) => {
        console.log(data);
    });
}
)()