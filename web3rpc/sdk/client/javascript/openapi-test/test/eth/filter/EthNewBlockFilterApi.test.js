const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_newBlockFilter API', () => {
    test('should return eth_newBlockFilter', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'number' || /^0x[0-9a-fA-F]+$/.test(data)).toBe(true);
            done();
        };

        sdk.eth.newBlockFilter({}, callbackOne);
    });
});
