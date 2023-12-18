const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const blockHash = '0xc9dbfbab67e9a0508bcb3f95ae408023668cef431b805592781a821926715b8a'
    
    sdk.eth.getUncleCountByBlockHash(blockHash, {}, (err, data, response) => {
        console.log(data);
    });
}
)()