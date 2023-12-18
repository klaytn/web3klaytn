const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const fileName = '/tmp/chain.txt'
    const startBlock = 1
    const endBlock = 1000
    
    sdk.admin.exportChain(fileName, startBlock, endBlock, {}, (err, data, response) => {
        console.log(data);
    });
}
)()