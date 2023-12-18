const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const location = "server.go:443";

    sdk.debug.backtraceAt(location, {}, (err, data, response) => {
        console.log(data);
    });
}
)()