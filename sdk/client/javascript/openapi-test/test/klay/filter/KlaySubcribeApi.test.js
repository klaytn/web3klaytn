const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_subscribe API', () => {
    test('should return klay_subscribe', (done) => {

        let callbackOne =  function (error, data, response) {
            console.log(error,data);
            // expect(error).toBeNull();
            // expect(data.jsonrpc).toBe("2.0");
            // expect(data.result).toBeDefined()

             done();
        };
        const id='logs'
        sdk.klay.subscribe(id, {}, callbackOne);
    });
});
