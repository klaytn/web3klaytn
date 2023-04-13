const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const startBlockHash = "0xf07cd36ec44fc4b540dd9423317fd49171f03cc6063e8b517dfc9fe14d08ab7a"
    const endBlockHash = "0xef15330537698b6cdfe31966cd0e0264af191c828a03a1a40e23ad465917b215"

    sdk.debug.getModifiedAccountsByHash(startBlockHash, {endBlockHash}, (err, data, response) => {
        console.log(data);
    });
}
)()