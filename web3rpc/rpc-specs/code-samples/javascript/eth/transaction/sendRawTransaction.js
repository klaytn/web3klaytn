const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const singedTransactionData = '0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67'
    
    sdk.eth.sendRawTransaction(singedTransactionData, {}, (err, data, response) => {
        console.log(data);
    });

}
)()