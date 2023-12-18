const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const fileName = "/home/sotatek/block.rlp";

    sdk.debug.traceBlockFromFile(fileName, {}, (err, data, response) => {
        console.log(data);
    });
}
)()