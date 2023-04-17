const { EthApi, ApiClient, Tx } = require('opensdk-javascript-eth')
const { KlayApi } = require('opensdk-javascript-klay')
const { TxpoolApi } = require('opensdk-javascript-txpool')
const { NetApi } = require('opensdk-javascript-net')
const { PersonalApi } = require('opensdk-javascript-personal')
const { AdminApi } = require('opensdk-javascript-admin')
class OpenSDK {
    static Eth = EthApi
    static Klay = KlayApi
    static Txpool = TxpoolApi
    static Net = NetApi
    static Personal = PersonalApi
    static Admin = AdminApi
    static ApiClient = ApiClient

    constructor(apiClient) {
        this.eth = new EthApi(apiClient)
        this.klay = new KlayApi(apiClient)
        this.txpool = new TxpoolApi(apiClient)
        this.net = new NetApi(apiClient)
        this.personal = new PersonalApi(apiClient)
        this.admin = new AdminApi(apiClient)
    }
    static eth(apiClient) {
        return new OpenSDK.Eth(apiClient)
    }
    static klay(apiClient) {
        return new OpenSDK.Klay(apiClient)
    }
    static txpool(apiClient) {
        return new OpenSDK.Txpool(apiClient)
    }
    static net(apiClient) {
        return new OpenSDK.Net(apiClient)
    }
    static personal(apiClient) {
        return new OpenSDK.Personal(apiClient)
    }
    static admin(apiClient) {
        return new OpenSDK.Admin(apiClient)
    }

}
module.exports = OpenSDK