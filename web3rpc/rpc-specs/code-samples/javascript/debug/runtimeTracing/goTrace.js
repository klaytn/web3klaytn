const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const file = "go.trace";
    const seconds = 5;

    sdk.debug.goTrace(file, seconds, {}, (err, data, response) => {
        console.log(data);
    });
}
)()