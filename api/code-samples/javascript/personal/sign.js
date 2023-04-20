const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    const address = '0x6b1ac7bda0073095df1d434c39d66fb31a592bdd';
    const message = '0xdeadbeaf';
    const password = "helloWorld";

    sdk.personal.sign(message, address, password, {}, (err, data, response) => {
        console.log(data);
    });
}
)()