const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const fileName = '/tmp/chain.txt'
    const startBlock = 1
    const endBlock = 1000
    
    sdk.admin.exportChain(fileName, startBlock, endBlock, {}, (err, data, response) => {
        console.log(data);
    });
}
)()