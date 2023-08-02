const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    const address = '0x1cbd3b2770909d4e10f157cabc84c7264073c9ec'
    const blockNumberOrHash = 'latest'
    
    sdk.klay.getAccount(address, blockNumberOrHash, {}, (err, data, response) => {
        console.log(data);
    });
}
)()