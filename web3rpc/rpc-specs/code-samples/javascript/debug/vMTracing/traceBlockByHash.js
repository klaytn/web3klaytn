const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const blockHash = "0xed110b330152df2022d40fa3c38987643034aa56fc96079fb6c67b66a6ed4f19";

    sdk.debug.traceBlockByHash(blockHash, {}, (err, data, response) => {
        console.log(data);
    });
}
)()