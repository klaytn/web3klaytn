const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const address = "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b"

    sdk.debug.startContractWarmUp(address, {}, (err, data, response) => {
        console.log(data);
    });
}
)()