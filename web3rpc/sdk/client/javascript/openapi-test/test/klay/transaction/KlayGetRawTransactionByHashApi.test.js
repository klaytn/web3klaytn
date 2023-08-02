const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(RPC));

describe('klay_getRawTransactionByHash API', () => {
    test('should return klay_getRawTransactionByHash', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(data).toMatch(/^0x.*$/gm)
            done();
        };
        const transactionHash = '0x21b2919b89278ca786226f10edbaadced7381dbd73df546a4823547aaebffa58'
        sdk.getRawTransactionByHash(transactionHash, {}, callbackOne);
    });
});

