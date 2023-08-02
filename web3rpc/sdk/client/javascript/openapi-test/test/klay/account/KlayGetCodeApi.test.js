const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const {RPC}=require("../../constant")
const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(RPC));

describe('klay_getCode API', () => {
    test('should return account code.', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(/^0x.*$/.test(data)).toBe(true);
            done();
        };
        const account = '0x623fa116b9cac1709b490dc24d6408b14220214f'
        const blockNumberOrHash = 'latest'
        sdk.getCode(account, blockNumberOrHash, {}, callbackOne);
    });
});
