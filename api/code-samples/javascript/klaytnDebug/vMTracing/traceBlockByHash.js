const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const blockHash = "0x244acf3f11f0999b93616cb156dc1b43ee87e27c9625a7170cf6de447189d890";

    sdk.debug.traceBlockByHash(blockHash, {}, (err, data, response) => {
        console.log(data);
    });
}
)()