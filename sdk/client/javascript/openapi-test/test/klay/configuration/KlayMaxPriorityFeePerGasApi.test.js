const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_maxPriorityFeePerGas API', () => {
    test('should return klay_maxPriorityFeePerGas', (done) => {

        let callbackOne =  function (error, data, response) {
            
             expect(error).toBeNull();
             expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
             done();
        };
       
        sdk.klay.maxPriorityFeePerGas({}, callbackOne);
    });
});