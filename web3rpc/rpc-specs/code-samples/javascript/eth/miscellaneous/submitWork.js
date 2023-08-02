const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const nonce = '0x0000000000000001'
    const powHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'
    const mixDigest = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'
    
    sdk.eth.submitWork(nonce, powHash, mixDigest, {}, (err, data, response) => {
        console.log(data);
    });
}
)()