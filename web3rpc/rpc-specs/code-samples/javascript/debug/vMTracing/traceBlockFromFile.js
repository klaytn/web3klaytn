const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const fileName = "/home/sotatek/block.rlp";

    sdk.debug.traceBlockFromFile(fileName, {}, (err, data, response) => {
        console.log(data);
    });
}
)()