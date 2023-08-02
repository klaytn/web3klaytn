const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const address = "0x6b1ac7bda0073095df1d434c39d66fb31a592bdd";
    const passphrase = "helloWorld";
    const duration = 10;

    sdk.personal.unlockAccount(address, passphrase, {duration}, (err, data, response) => {
        console.log(data);
    });
}
)()