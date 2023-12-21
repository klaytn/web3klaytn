const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const passphrase = "helloWorld"

    provider.personal.newAccount({passphrase}, (err, data, response) => {
        console.log(data);
    });
}
)()