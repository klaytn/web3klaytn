const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    const address = '0x295a70b2de5e3953354a6a8344e616ed314d7251'
    const quantity = '0x0'
    const blockNumberOrHashOrTag = 'latest'

    sdk.eth.getStorageAt(address, quantity, blockNumberOrHashOrTag, {}, (err, data, response) => {
        console.log(data);
    });
}
)()