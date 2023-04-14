const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const privateKey = "cd87934ee007b7a458fa00dc0314fff8b2bd43b3071f46c820c379e483b4fd8e";
    const passphrase = "gr8=B!0@uc$b"

    sdk.personal.importRawKey(privateKey, passphrase, {}, (err, data, response) => {
        console.log(data);
    });
}
)()