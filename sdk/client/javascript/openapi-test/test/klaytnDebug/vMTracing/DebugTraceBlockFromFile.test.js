const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_traceBlockFromFile API', () => {
    test('should return debug_traceBlockFromFile', (done) => {

        let callbackOne = function (error, data, response) {
            console.log("error:", error);
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            // expect(data.result).toBeDefined()
            done();
        };

        const fileName = "block.rlp";

        sdk.debug.traceBlockFromFile(fileName, {}, callbackOne);
    });
});

