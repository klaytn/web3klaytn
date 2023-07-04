const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_standardTraceBlockToFile API', () => {
    test('should return debug_standardTraceBlockToFile', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data).toBeNull();
            done();
        };

        const blockHash = "0xf1b4df5d4457d4771740887eeb46de3fc26ae4cddf93d69b1b237c2366ff12eb";

        sdk.debug.standardTraceBlockToFile(blockHash, {}, callbackOne);
    });
});

