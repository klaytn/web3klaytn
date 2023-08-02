const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const url = "keystore://"
    const passphrase = "gr8=B!0@uc$b"

    sdk.personal.openWallet(url, passphrase, {}, (err, data, response) => {
        console.log(data);
    });
}
)()