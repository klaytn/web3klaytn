const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const url = "keystore://"
    const passphrase = "gr8=B!0@uc$b"

    provider.personal.openWalconst(url, passphrase, {}, (err, data, response) => {
        console.log(data);
    });
}
)()