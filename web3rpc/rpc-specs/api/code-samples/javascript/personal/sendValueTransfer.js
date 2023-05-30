const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    const tx = {
        "from": "0x1d4e05bb72677cb8fa576149c945b57d13f855e4",
        "to": "0xafa3f8684e54059998bc3a7b0d2b0da075154d66",
        "value": "0x1230000000"
    };
    const passphrase = "helloWorld";

    sdk.personal.sendValueTransfer(tx, passphrase, {}, (err, data, response) => {
        console.log(data);
    });
}
)()