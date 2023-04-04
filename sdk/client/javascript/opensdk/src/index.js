const { EthApi, ApiClient } = require('opensdk-javascript-eth')
const { KlayApi } = require('opensdk-javascript-klay')
const { TxPoolApi } = require('opensdk-javascript-txpool')
const { NetApi } = require('opensdk-javascript-net')
class OpenSDK {
    static Eth = EthApi
    static Klay = KlayApi
    static TxPool = TxPoolApi
    static Net = NetApi
    static ApiClient = ApiClient

    constructor(apiClient) {
        this.eth = new EthApi(apiClient)
        this.klay = new KlayApi(apiClient)
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