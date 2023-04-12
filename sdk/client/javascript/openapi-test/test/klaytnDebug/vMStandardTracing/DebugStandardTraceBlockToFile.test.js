const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_standardTraceBlockToFile API', () => {
    test('should return debug_standardTraceBlockToFile', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            // expect(data.result).toBeDefined()
            done();
        };

        const blockHash = "0x485fff444481ee28debe50639f312f44e0a09342161a8906a99cf325cc2512a4";

        sdk.debug.standardTraceBlockToFile(blockHash, {}, callbackOne);
    });
});

