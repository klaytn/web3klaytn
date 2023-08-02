const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    const address = '0xce9fba8dca42d096d019cc1cb89f5803a2c40fb3'
    const blockNumberOrHash = '0x2'
    
    sdk.eth.getCode(address, blockNumberOrHash, {}, (err, data, response) => {
        console.log(data);
    });
}
)()