const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getBalance API', () => {
    test('should return eth_getBalance', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };
        const address = '0x3111a0577f322e8fb54f78d9982a26ae7ca0f722'
        const blockNumberOrHashOrTag = 'latest'
        sdk.eth.getBalance(address, blockNumberOrHashOrTag, {}, callbackOne);
    });
});

