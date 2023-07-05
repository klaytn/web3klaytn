const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const address = '0x3111a0577f322e8fb54f78d9982a26ae7ca0f722'
    const blockNumberOrHashOrTag = 'latest'

    sdk.eth.getBalance(address, blockNumberOrHashOrTag, {}, (err, data, response) => {
        console.log(data);
    });

}
)()