const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const file = "block.profile";

    provider.debug.writeBlockProfile(file, {}, (err, data, response) => {
        console.log(data);
    });
}
)()