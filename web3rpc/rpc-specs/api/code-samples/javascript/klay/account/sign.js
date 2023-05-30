const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    const address = '0x487f2dfef230c2120b8cc55c5087b103146536ec'
    const message = '0xdeadbeaf'

    sdk.klay.sign(address, message, {}, (err, data, response) => {
        console.log(data);
    });
}
)()