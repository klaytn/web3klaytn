const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");    
    const id = 1;
    const level = 3;

    provider.debug.verbosityByID(id, level, {}, (err, data, response) => {
        console.log(data);
    });
}
)()