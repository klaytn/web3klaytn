const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const accountKey = { "keyType": 0, "key": {} }

    sdk.klay.encodeAccountKey(accountKey, {}, (err, data, response) => {
        console.log(data);
    });
}
)()