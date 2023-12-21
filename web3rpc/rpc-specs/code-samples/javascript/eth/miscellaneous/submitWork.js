const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
const provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const nonce = '0x0000000000000001'
    const powHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'
    const mixDigest = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'
    
    provider.eth.submitWork(nonce, powHash, mixDigest, {}, (err, data, response) => {
        console.log(data);
    });
}
)()