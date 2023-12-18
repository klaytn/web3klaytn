const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const address = '0x3111a0577f322e8fb54f78d9982a26ae7ca0f722'
    const blockNumberOrHashOrTag = 'latest'

    sdk.eth.getBalance(address, blockNumberOrHashOrTag, {}, (err, data, response) => {
        console.log(data);
    });

}
)()