const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const singedTransactionData = '0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67'
    
    sdk.klay.sendRawTransaction(singedTransactionData, {}, (err, data, response) => {
        console.log(data);
    });

}
)()