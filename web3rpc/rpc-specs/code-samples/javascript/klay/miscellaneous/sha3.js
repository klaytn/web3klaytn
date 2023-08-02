const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    const data = '0x11223344'
    
    sdk.klay.sha3(data, {}, (err, data, response) => {
        console.log(data);
    });

}
)()