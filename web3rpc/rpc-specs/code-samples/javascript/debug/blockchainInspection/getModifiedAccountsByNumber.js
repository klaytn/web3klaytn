const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const startBlockNum = 171904
    const endBlockNum = 172160

    sdk.debug.getModifiedAccountsByNumber(startBlockNum, {endBlockNum}, (err, data, response) => {
        console.log(data);
    });
}
)()