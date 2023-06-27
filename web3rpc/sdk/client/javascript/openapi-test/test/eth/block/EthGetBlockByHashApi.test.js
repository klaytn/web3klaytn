const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getBlockByHash API', () => {
    test('should return eth_getBlockByHash', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()
            if (data !== null) {
                expect(data.number).toMatch(/^0x.*$/gm)
            }
            done();
        };
        const blockHash = '0xb8deae63002d2b6aa33247c8ef545383ee0fd2282ac9b49dbbb74114389ddb5c'
        const transactionObject = true
        sdk.eth.getBlockByHash(blockHash, transactionObject, {}, callbackOne);
    });
});

