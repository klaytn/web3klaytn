const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const maxSubscriptionPerWSConn = 5
 
    sdk.admin.setMaxSubscriptionPerWSConn(maxSubscriptionPerWSConn, {}, (err, data, response) => {
        console.log(data);
    });
}
)()