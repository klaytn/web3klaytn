const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const address = "0x4Cd39B49064a31E966cA0ddF4111aCe2eD7E9502"

    sdk.debug.startContractWarmUp(address, {}, (err, data, response) => {
        console.log(data);
    });
}
)()