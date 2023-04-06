const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getCode API', () => {
    test('should return eth_getCode', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };

        const address = '0xce9fba8dca42d096d019cc1cb89f5803a2c40fb3'
        const blockNumberOrHash = '0x2'
        sdk.eth.getCode(address, blockNumberOrHash, {}, callbackOne);
    });
});
