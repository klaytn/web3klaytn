const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const address = "localhost";
    const port = 6060;
    
    sdk.debug.startPProf({address, port}, (err, data, response) => {
        console.log(data);
    });
}
)()