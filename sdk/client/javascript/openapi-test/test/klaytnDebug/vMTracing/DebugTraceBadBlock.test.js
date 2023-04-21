const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_traceBadBlock API', () => {
    test('should return debug_traceBadBlock', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };

        const blockHash = "0xcecc781a00eaa53579c188e603b7726211c2ff765f06cf606e7638c884fa7c06";

        sdk.debug.traceBadBlock(blockHash, {}, callbackOne);
    });
});

