const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const {RPC}=require("../../constant")
const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_getCode API', () => {
    test('should return account code.', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const account = '0x623fa116b9cac1709b490dc24d6408b14220214f'
        const blockNumberOrHash = 'latest'
        sdk.klay.getCode(account, blockNumberOrHash, {}, callbackOne);
    });
});
