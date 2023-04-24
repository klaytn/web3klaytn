const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const account = '0x487f2dfef230c2120b8cc55c5087b103146536ec'
    const keys = ['0x0000000000000000000000000000000000000000000000000000000000000000']
    const blockNumber = 'latest'
    sdk.eth.getProof(account, keys, blockNumber, {}, (err, data, response) => {
        console.log(data);
    });

}
)()