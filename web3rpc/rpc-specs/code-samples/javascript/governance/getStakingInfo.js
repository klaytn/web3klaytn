const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const blockNumber = "latest";

    sdk.governance.getStakingInfo(blockNumber, {}, (err, data, response) => {
        console.log(data);
    });
}
)()