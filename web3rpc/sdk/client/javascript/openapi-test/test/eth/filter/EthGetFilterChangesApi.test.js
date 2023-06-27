const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");
const { getEthFilterId } = require("../../../helpers/eth");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getFilterChanges API', () => {
    test('should return eth_getFilterChanges', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(Array.isArray(data)).toBe(true);
            done();
        };
        getEthFilterId().then(id => {
            sdk.eth.getFilterChanges(id, {}, callbackOne);
        })
    });
});
