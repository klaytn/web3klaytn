const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const tx =   {
        "from":"0x1d4e05bb72677cb8fa576149c945b57d13f855e4",
        "key":"0x02a102dbac81e8486d68eac4e6ef9db617f7fbd79a04a3b323c982a09cdfc61f0ae0e8"
    };
    const passphrase = "gr8=B!0@uc$b";

    sdk.personal.sendAccountUpdate(tx, passphrase, {}, (err, data, response) => {
        console.log(data);
    });
}
)()