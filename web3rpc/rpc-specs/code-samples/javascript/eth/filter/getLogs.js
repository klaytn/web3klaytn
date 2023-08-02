const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    const filterOptions = {
        "fromBlock": "latest",
        "toBlock": "latest",
        "address": "0x87ac99835e67168d4f9a40580f8f5c33550ba88b"
    }
    sdk.eth.getLogs(filterOptions, {}, (err, data, response) => {
        console.log(data);
    });
}
)()