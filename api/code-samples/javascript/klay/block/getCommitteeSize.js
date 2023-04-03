const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const blockNumberOrTag = '0x1b4'
    
    sdk.klay.getCommittee(blockNumberOrTag, {}, (err, data, response) => {
        console.log(data);
    });
}
)()