const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const fileName = "/home/sotatek/block.rlp";

    provider.debug.traceBlockFromFile(fileName, {}, (err, data, response) => {
        console.log(data);
    });
}
)()