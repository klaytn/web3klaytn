const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const firstBlock = 123400489;
    const lastBlock = 123416489;

    sdk.governance.getRewardsAccumulated(firstBlock, lastBlock, {}, (err, data, response) => {
        console.log(data);
    });
}
)()