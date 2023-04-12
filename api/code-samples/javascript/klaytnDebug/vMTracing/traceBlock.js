const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const blockRlp = "0x1d5ba00e313a81ae6d409d459c153327072665d9ea2f47608369722baf0cfbb6"

    sdk.debug.traceBlock(blockRlp, {}, (err, data, response) => {
        console.log(data);
    });
}
)()