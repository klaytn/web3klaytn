const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const fileName = '/tmp/chain.txt'
    
    sdk.admin.exportChain(fileName, {}, (err, data, response) => {
        console.log(data);
    });
}
)()