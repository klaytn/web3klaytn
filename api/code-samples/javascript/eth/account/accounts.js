const Caver = require("caver-javascript");


( () => {
    let api = new Caver.EthAccountApi(new Caver.ApiClient("https://api.baobab.klaytn.net:8651"));
    api.ethAccounts({},(err,data,response)=>{
        console.log(data);
    });
}
)()
