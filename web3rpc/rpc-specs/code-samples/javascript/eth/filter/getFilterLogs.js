const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const id = '0xca6c12a3ecd1b44bb77f7b6536b7ce65'
    
    sdk.eth.getFilterLogs(id, {}, (err, data, response) => {
        console.log(data);
    });
}
)()