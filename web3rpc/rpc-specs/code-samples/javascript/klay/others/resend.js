const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const sendArgs = {
        "from": "0x65b47be3457ff26f2911cf89fd079cef0475a2e6",
        "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
        "value": "0x1",
        "gas": "0x9999",
        "maxFeePerGas": "0x5d21dba00",
        "maxPriorityFeePerGas": "0x5d21dba00",
        "nonce": "0xd"
    }
    const gasPrice = "0xba43b7500";
    const gasLimit = "0xe8d4a50fff";
   
    sdk.klay.resend(sendArgs, gasPrice, gasLimit, {},(err, data, response) => {
        console.log(data);
    })
}
)()