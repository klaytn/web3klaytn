const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const file = "mem.profile";

    sdk.debug.writeMemProfile(file, {}, (err, data, response) => {
        console.log(data);
    });
}
)()