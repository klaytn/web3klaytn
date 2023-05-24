const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");
const {join} = require('path');

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_traceBlockFromFile API', () => {
    test('should return debug_traceBlockFromFile', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        const fileName = "/home/sotatek/block.rlp";

        sdk.debug.traceBlockFromFile(fileName, {}, callbackOne);
    });
});

