const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const sha3Hash = "0xaf953a2d01f55cfe080c0c94150a60105e8ac3d51153058a1f03dd239dd08586"

    sdk.debug.preimage(sha3Hash, {}, (err, data, response) => {
        console.log(data);
    });
}
)()