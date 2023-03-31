const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new Caver.ApiClient("https://api.baobab.klaytn.net:8651"));


    const blockHash = '0xba647d41423faeebe8a7c64737d284fc2eba6f0388a3e1ebf6243db509ec1577'
    
    sdk.klay.getHeaderByHash(blockHash, {}, (err, data, response) => {
        console.log(data);
    });

}
)()