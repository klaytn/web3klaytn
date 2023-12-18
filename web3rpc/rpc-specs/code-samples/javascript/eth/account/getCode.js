const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");

    const address = '0xce9fba8dca42d096d019cc1cb89f5803a2c40fb3'
    const blockNumberOrHash = '0x2'
    
    sdk.eth.getCode(address, blockNumberOrHash, {}, (err, data, response) => {
        console.log(data);
    });
}
)()