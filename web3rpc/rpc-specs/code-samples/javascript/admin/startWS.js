const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const host = '127.0.0.1'
    const port = 8552
    const cors = ''
    const apis = 'klay'

    sdk.admin.startWS({ host, port, cors, apis }, (err, data, response) => {
        console.log(data);
    });
}
)()