const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const forkNumber = 20
    
    sdk.klay.forkStatus(forkNumber, {}, (err, data, response) => {
        console.log(data);
    });
}
)()