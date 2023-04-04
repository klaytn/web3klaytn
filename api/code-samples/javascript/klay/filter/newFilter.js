const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
   
    const fromBlock = 'earliest'
    const toBlock = 'latest'
    const address = '0x87ac99835e67168d4f9a40580f8f5c33550ba88b'
    const topics = [
        '0xd596fdad182d29130ce218f4c1590c4b5ede105bee36690727baa6592bd2bfc8'
    ]
    sdk.klay.newFilter(fromBlock, toBlock, address, topics, {},(err, data, response) => {
        console.log(data);
    })
}
)()