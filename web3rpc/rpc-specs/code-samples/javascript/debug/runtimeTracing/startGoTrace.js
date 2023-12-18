const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const file = "go.trace";

    sdk.debug.startGoTrace(file, {}, (err, data, response) => {
        console.log(data);
    });
}
)()
