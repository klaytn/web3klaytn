const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");

    const blockNumberOrHash = 'latest'
    sdk.eth.createAccessList(transactionArgs, blockNumberOrHash, {}, (err, data, response) => {
        console.log(data);
    });

}
)()