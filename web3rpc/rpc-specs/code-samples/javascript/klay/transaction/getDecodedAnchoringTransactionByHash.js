const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    const hashOfTransaction = '0x026b64e16b86633c0199f78f37a64840d3601d83e5c799f115b63024764524ca'

    sdk.klay.getDecodedAnchoringTransactionByHash(hashOfTransaction, {}, (err, data, response) => {
        console.log(data);
    });
}
)()