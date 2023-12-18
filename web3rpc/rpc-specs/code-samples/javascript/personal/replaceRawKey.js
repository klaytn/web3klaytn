const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const keyData = "24c34f686a5848edb19180fb723b5db21c626f253e8b63bf8a0054ea67852c0a";
    const oldPassphrase = "hello@123";
    const newPassphrase = "hello@123";

    sdk.personal.replaceRawKey(keyData, oldPassphrase, newPassphrase, {}, (err, data, response) => {
        console.log(data);
    });
}
)()