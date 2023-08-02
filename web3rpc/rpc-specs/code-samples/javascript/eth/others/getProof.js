const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const account = '0xe5cB067E90D5Cd1F8052B83562Ae670bA4A211a8'
    const keys = ['0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421']
    const blockNumber = "latest"
    sdk.eth.getProof(account, keys, blockNumber, {}, (err, data, response) => {
        console.log(data);
    });

}
)()