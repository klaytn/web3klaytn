const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");

    const blockNumberOrTag = 'latest'
    
    sdk.klay.getStakingInfo(blockNumberOrTag, {}, (err, data, response) => {
        console.log(data);
    });

}
)()