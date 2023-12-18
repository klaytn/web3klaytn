const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const url = "keystore://"
    const passphrase = "gr8=B!0@uc$b"

    sdk.personal.openWallet(url, passphrase, {}, (err, data, response) => {
        console.log(data);
    });
}
)()