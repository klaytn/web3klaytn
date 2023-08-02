const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(RPC));

describe('klay_subscribe API', () => {
    test('should return klay_subscribe', (done) => {

        let callbackOne =  function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()

             done();
        };
        const id='logs'
        sdk.subscribe(id, {}, callbackOne);
    });
});
