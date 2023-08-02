const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { PN_RPC } = require("../../constant");
const { getEthFilterIdPNNode } = require("../../../helpers/eth");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(PN_RPC));

describe('klay_getFilterLogs API', () => {
    test('should return klay_getFilterLogs', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(Array.isArray(data)).toBeTruthy()
            done();
        };

        getEthFilterIdPNNode().then(quantity => {
            sdk.getFilterLogs(quantity, {}, callbackOne);
        })
    });
});
