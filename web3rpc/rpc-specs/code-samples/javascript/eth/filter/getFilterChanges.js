

const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");

    const id = '0x52421f131ef49ef6b7a8926b8e0a65e'
    
    provider.eth.getFilterChanges(id, {}, (err, data, response) => {
        console.log(data);
    });

}
)()