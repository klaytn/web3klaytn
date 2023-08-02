const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const blockHash = '0xc9dbfbab67e9a0508bcb3f95ae408023668cef431b805592781a821926715b8a'
    
    sdk.eth.getUncleCountByBlockHash(blockHash, {}, (err, data, response) => {
        console.log(data);
    });
}
)()