const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const address = "0x73a7d19d14f7dfac5b799e405e22133b2adc57a6";
    const startBlockNum = 100;
    const endBlockNum = 200;

    sdk.debug.getModifiedStorageNodesByNumber(address, startBlockNum, endBlockNum, {}, (err, data, response) => {
        console.log(data);
    });
}
)()