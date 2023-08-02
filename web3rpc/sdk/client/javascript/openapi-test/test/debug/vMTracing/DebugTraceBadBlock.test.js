const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.DebugApi(new OpenSdk.ApiClient(RPC));

describe('debug_traceBadBlock API', () => {
    test.skip('should return debug_traceBadBlock', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        const blockHash = "0xcecc781a00eaa53579c188e603b7726211c2ff765f06cf606e7638c884fa7c06";

        sdk.traceBadBlock(blockHash, {}, callbackOne);
    });
});

