const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const file = "block.profile";

    sdk.debug.writeBlockProfile(file, {}, (err, data, response) => {
        console.log(data);
    });
}
)()