const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    const tx = {
        "from": "0x413ba0e5f6f00664598b5c80042b1308f4ff1408",
        "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
        "value": "0x1",
        "gas": "0x9999",
        "txSignatures": [{"v":"0x7f4","r":"0x9e9d1cbf8c1a4e31fcd4e393f3e535cb5fdd625af678cded6a273994d3fafda2","s":"0x17306171c0251a16c3e469a00b23c27f3a8fa70c8d3db5b520f076b186d74037"}],
        "nonce": "0x1",
    };
    const passphrase = "helloWorld";

    sdk.personal.sendValueTransfer(tx, passphrase, {}, (err, data, response) => {
        console.log(data);
    });
}
)()