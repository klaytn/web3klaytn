const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_traceBlockByHash API', () => {
    test('should return debug_traceBlockByHash', (done) => {

        let callbackOne = function (error, data, response) {
            console.log("error:", error);
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            // expect(data.result).toBeDefined()
            done();
        };

        const blockHash = "0x244acf3f11f0999b93616cb156dc1b43ee87e27c9625a7170cf6de447189d890";

        sdk.debug.traceBlockByHash(blockHash, {}, callbackOne);
    });
});

