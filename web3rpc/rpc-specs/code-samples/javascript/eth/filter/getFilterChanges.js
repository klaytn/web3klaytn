

const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    const id = '0x52421f131ef49ef6b7a8926b8e0a65e'
    
    sdk.eth.getFilterChanges(id, {}, (err, data, response) => {
        console.log(data);
    });

}
)()