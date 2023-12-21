const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const file = "go.trace";
    const seconds = 5;

    provider.debug.goTrace(file, seconds, {}, (err, data, response) => {
        console.log(data);
    });
}
)()