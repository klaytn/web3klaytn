const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const maxSubscriptionPerWSConn = 5
 
    sdk.admin.setMaxSubscriptionPerWSConn(maxSubscriptionPerWSConn, {}, (err, data, response) => {
        console.log(data);
    });
}
)()