const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    const address = '0xa4f42d4d2a3a13874406435500950c9bf2d783db'
    const blockTag = 'latest'
    sdk.klay.accountCreated(address, blockTag, {}, (err, data, response) => {
        console.log(data);
    });
}
)()