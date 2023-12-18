const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const blockNumber = 89;

    sdk.governance.getParams(blockNumber, {}, (err, data, response) => {
        console.log(data);
    });
}
)()