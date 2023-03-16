const Caver = require("caver-javascript");


( () => {
    let api = new Caver.EthBlockApi(new Caver.ApiClient("https://api.baobab.klaytn.net:8651"));
    api.ethBlockNumber({},(err,data,response)=>{
        console.log(data);
    });
}
)()