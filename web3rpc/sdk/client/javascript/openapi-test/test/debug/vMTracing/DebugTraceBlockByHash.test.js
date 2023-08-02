const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC, BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk.DebugApi(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('debug_traceBlockByHash API', () => {
    test('should return debug_traceBlockByHash', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(Array.isArray(data)).toBeTruthy();
            if (data.length > 0) {
                expect(/^0x[0-9a-fA-F]+$/.test(data[0].txHash)).toBeTruthy();
            }
            done();
        };

        const blockHash = "0xba647d41423faeebe8a7c64737d284fc2eba6f0388a3e1ebf6243db509ec1577";

        sdk.traceBlockByHash(blockHash, {}, callbackOne);
    });
});

