const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    const account = '0xc94770007dda54cF92009BFF0dE90c06F603a09f'
    const blockNumberOrHashOrTag = 'latest'

    sdk.klay.isContractAccount(account, blockNumberOrHashOrTag, {}, (err, data, response) => {
        console.log(data);
    });
}
)()