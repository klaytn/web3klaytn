const OpenSdk = require("opensdk-javascript");


( () => {
    const sdk = new OpenSdk(new ApiClient("https://api.baobab.klaytn.net:8651"));
    sdk.eth.accounts({},(err,data,response)=>{
        console.log(data);
    });
}
)()
