const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const file = "go.trace";

    provider.debug.startGoTrace(file, {}, (err, data, response) => {
        console.log(data);
    });
}
)()
