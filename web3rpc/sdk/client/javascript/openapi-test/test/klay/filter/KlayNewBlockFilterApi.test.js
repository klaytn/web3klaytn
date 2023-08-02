const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(RPC));

describe('klay_newBlockFilter API', () => {
    test('should return klay_newBlockFilter', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(/^0x[a-f0-9]+/.test(data)).toBe(true);
            done();
        };

        sdk.newBlockFilter({}, callbackOne);
    });
}); 