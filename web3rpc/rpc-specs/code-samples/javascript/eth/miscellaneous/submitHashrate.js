const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const hashrate = '0x5'
    const id = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'

    sdk.eth.submitHashrate(hashrate, id, {}, (err, data, response) => {
        console.log(data);
    });
}
)()