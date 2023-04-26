const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const key = "governance.governancemode";
    const value = "ballot";

    sdk.governance.vote(key, value, {}, (err, data, response) => {
        console.log(data);
    });
}
)()