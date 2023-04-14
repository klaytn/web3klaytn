const { EthApi, ApiClient, Tx } = require('opensdk-javascript-eth')
const { KlayApi } = require('opensdk-javascript-klay')
const { TxpoolApi } = require('opensdk-javascript-txpool')
const { NetApi } = require('opensdk-javascript-net')
class OpenSDK {
    static Eth = EthApi
    static Klay = KlayApi
    static TxpoolApi = TxpoolApi
    static Net = NetApi
    static ApiClient = ApiClient

    constructor(apiClient) {
        this.eth = new EthApi(apiClient)
        this.klay = new KlayApi(apiClient)
        this.txpool= new TxpoolApi(apiClient)
        this.net= new NetApi(apiClient)
    }
    static eth(apiClient) {
        return new OpenSDK.Eth(apiClient)
    }
    static klay(apiClient) {
        return new OpenSDK.Klay(apiClient)
    }
    static txpool(apiClient) {
        return new OpenSDK.TxPool(apiClient)
    }
    static net(apiClient) {
        return new OpenSDK.Net(apiClient)
    }

}
module.exports = OpenSDK