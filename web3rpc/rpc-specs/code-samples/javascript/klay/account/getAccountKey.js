const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const address = '0xa36a5fdc679ecaabe057556ccec2f3558068bdc8'
    const blockNumberOrHash = 'latest'

    sdk.klay.getAccountKey(address, blockNumberOrHash, {}, (err, data, response) => {
        console.log(data);
    });

}
)()