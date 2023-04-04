const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_getRawTransactionByBlockHashAndIndex API', () => {
    test('should return klay_getRawTransactionByBlockHashAndIndex', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const blockHash = '0x4c4cbf242a80183d2ea2daf047c578d5fc89c0b14c4262606c8b6bb0b36715be'
        const transactionIndexPosition = '0x0'
        sdk.klay.getRawTransactionByBlockHashAndIndex(blockHash, transactionIndexPosition, {}, callbackOne);
    });
});

