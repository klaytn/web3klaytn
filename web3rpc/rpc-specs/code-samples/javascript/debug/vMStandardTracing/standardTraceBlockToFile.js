const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const blockHash = "0xdabbc6a0d2619c56db4645c4e85799af9927bdf3bd13d0c77e49db413e3db9f3"
    
    sdk.debug.standardTraceBlockToFile(blockHash, {}, (err, data, response) => {
        console.log(data);
    });
}
)()