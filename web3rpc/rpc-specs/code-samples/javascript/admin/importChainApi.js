const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const fileName = '/tmp/chain.txt'

    sdk.admin.importChain(fileName, {}, (err, data, response) => {
        console.log(data);
    });
}
)()