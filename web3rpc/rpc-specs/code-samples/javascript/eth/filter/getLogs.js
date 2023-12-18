const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");

    const filterOptions = {
        "fromBlock": "latest",
        "toBlock": "latest",
        "address": "0x87ac99835e67168d4f9a40580f8f5c33550ba88b"
    }
    sdk.eth.getLogs(filterOptions, {}, (err, data, response) => {
        console.log(data);
    });
}
)()