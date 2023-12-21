const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");

    const blockNumberOrHash = 'latest'
    provider.eth.createAccessList(transactionArgs, blockNumberOrHash, {}, (err, data, response) => {
        console.log(data);
    });

}
)()