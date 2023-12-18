const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const key = "governance.governancemode";
    const value = "ballot";

    sdk.governance.vote(key, value, {}, (err, data, response) => {
        console.log(data);
    });
}
)()