const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const blockHash = "0x90c81195698bc9f282bbdec386b0afb4dcc28e43aae834894281c3ecb3c88d21";
    const txIndex = 1;
    const contractAddress = "0x73a7d19d14f7dfac5b799e405e22133b2adc57a6";
    const keyStart = "0x12";
    const maxResult = 1;

    sdk.debug.storageRangeAt(blockHash, txIndex, contractAddress, keyStart, maxResult, {}, (err, data, response) => {
        console.log(data);
    });
}
)()