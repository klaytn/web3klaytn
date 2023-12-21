const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const key = "governance.governancemode";
    const value = "ballot";

    provider.governance.vote(key, value, {}, (err, data, response) => {
        console.log(data);
    });
}
)()