const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const file = "cpu.profile";

    provider.debug.startCPUProfile(file, {}, (err, data, response) => {
        console.log(data);
    });
}
)()