const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getBlockTransactionCountByHash API', () => {
    test('should return eth_getBlockTransactionCountByHash', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()

            done();
        };
        const blockHash = '0xba647d41423faeebe8a7c64737d284fc2eba6f0388a3e1ebf6243db509ec1577'
        
        sdk.eth.getBlockTransactionCountByHash(blockHash, {}, callbackOne);
    });
});
