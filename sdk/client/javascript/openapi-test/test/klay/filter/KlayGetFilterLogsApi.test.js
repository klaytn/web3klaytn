const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");
const { getEthFilterId } = require("../../../helpers/eth");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_getFilterLogs API', () => {
    test('should return klay_getFilterLogs', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        getEthFilterId().then(quantity => {

            sdk.klay.getFilterLogs(quantity, {}, callbackOne);
        })
    });
});
