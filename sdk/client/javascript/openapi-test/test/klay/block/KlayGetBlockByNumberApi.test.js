const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");

const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('Klay getBlockByNumber API', () => {
    test('should return block.', (done) => {

        let callbackOne = function (error, data, response) {
            console.log(data);
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            // console.log('API called successfully. Returned data: ' + JSON.stringify(data));
            done();
        };
        const blockNumber = 1
        const returnTransactionObject=true
        sdk.klay.getBlockByNumber(blockNumber,returnTransactionObject, {},callbackOne);
    });
});
