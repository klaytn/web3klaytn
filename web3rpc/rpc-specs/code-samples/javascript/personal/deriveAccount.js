const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const url = "url";
    const path = "path";
    const pin = true;

    sdk.personal.deriveAccount(url, path, {pin}, (err, data, response) => {
        console.log(data);
    });
}
)()

