const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const url = "url";
    const path = "path";
    const pin = true;

    provider.personal.deriveAccount(url, path, {pin}, (err, data, response) => {
        console.log(data);
    });
}
)()

