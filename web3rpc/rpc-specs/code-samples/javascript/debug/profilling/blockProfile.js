const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const file = "block.profile";
    const seconds = 10;

    sdk.debug.blockProfile(file, seconds, {}, (err, data, response) => {
        console.log(data);
    });
}
)()