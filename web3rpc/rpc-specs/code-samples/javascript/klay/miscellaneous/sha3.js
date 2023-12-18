const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");

    const data = '0x11223344'
    
    sdk.klay.sha3(data, {}, (err, data, response) => {
        console.log(data);
    });

}
)()