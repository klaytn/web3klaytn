const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const passphrase = "helloWorld"

    sdk.personal.newAccount({passphrase}, (err, data, response) => {
        console.log(data);
    });
}
)()