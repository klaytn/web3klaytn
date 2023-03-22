const {EthApi}=require('opensdk-javascript-eth')
const {KlayApi}=require('opensdk-javascript-klay')
class OpenSDK {
    static eth=EthApi
    static klay=KlayApi
    constructor(apiClient){
        this.eth=new EthApi(apiClient)
        this.klay=new KlayApi(apiClient)
    }
    
}
module.exports=OpenSDK