const { JsonRpcProvider } = require("@klaytn/ethers-ext");
(() => {
let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
    const host = '127.0.0.1'
    const port = 8552
    const cors = ''
    const apis = 'klay'

    sdk.admin.startWS({ host, port, cors, apis }, (err, data, response) => {
        console.log(data);
    });
}
)()