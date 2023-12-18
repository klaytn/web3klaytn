const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");

    const address = '0x1cbd3b2770909d4e10f157cabc84c7264073c9ec'
    const blockNumberOrHash = 'latest'
    
    sdk.klay.getAccount(address, blockNumberOrHash, {}, (err, data, response) => {
        console.log(data);
    });
}
)()