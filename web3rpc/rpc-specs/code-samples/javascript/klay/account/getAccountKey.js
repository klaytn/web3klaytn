const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const address = '0xa36a5fdc679ecaabe057556ccec2f3558068bdc8'
    const blockNumberOrHash = 'latest'

    sdk.klay.getAccountKey(address, blockNumberOrHash, {}, (err, data, response) => {
        console.log(data);
    });

}
)()