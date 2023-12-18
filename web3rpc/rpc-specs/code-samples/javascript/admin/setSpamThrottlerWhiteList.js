const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const address = ['0xfdeedbb2fe5b48d5b49e435ba00e0358740d0cf5']
    sdk.admin.setSpamThrottlerWhiteList(address, {}, (err, data, response) => {
        console.log(data);
    });
}
)()