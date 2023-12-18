const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const blockNumberOrTag = '0x1b4'

    sdk.klay.getCommittee(blockNumberOrTag, {}, (err, data, response) => {
        console.log(data);
    });

}
)()