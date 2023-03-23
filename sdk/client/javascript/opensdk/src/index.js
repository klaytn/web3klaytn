const { EthApi, ApiClient } = require('opensdk-javascript-eth')
const { KlayApi } = require('opensdk-javascript-klay')
class OpenSDK {
    static Eth = EthApi
    static Klay = KlayApi
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

}
module.exports = OpenSDK