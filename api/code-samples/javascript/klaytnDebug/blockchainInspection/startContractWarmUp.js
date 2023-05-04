const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const address = "0x4Cd39B49064a31E966cA0ddF4111aCe2eD7E9502"

    sdk.debug.startContractWarmUp(address, {}, (err, data, response) => {
        console.log(data);
    });
}
)()