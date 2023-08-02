const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    const account = "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b"
    const blockNumberOrHash = "0x2"
    
    sdk.klay.getCode(account, blockNumberOrHash, {}, (err, data, response) => {
        console.log(data);
    });
}
)()