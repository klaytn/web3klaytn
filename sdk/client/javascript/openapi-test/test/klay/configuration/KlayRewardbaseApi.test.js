const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { CN_RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(CN_RPC));

describe('klay_rewardbase API', () => {
    test('should return klay_rewardbase', (done) => {

        let callbackOne =  function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            // expect(data.result).toBeDefined()
            done();
        };
       
        sdk.klay.rewardbase({}, callbackOne);
    });
});