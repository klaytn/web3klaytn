const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const blockNumber = "latest";

    provider.governance.getStakingInfo(blockNumber, {}, (err, data, response) => {
        console.log(data);
    });
}
)()