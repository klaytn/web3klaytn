const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const location = "server.go:443";

    provider.debug.backtraceAt(location, {}, (err, data, response) => {
        console.log(data);
    });
}
)()