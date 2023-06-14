const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const passphrase = "helloWorld"

    sdk.personal.newAccount({passphrase}, (err, data, response) => {
        console.log(data);
    });
}
)()