const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { PN_RPC } = require("../../constant");
const { getEthFilterIdPNNode } = require("../../../helpers/eth");

const sdk = new OpenSdk(new OpenSdk.ApiClient(PN_RPC));

describe('eth_getFilterLogs API', () => {
    test('should return eth_getFilterLogs', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(Array.isArray(data)).toBe(true);
            done();
        };
        getEthFilterIdPNNode().then(id => {
            sdk.eth.getFilterLogs(id, {}, callbackOne);
        })
    });
});

