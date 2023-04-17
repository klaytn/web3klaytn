const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('admin_importChainFromString API', () => {
    test.skip('should return admin_importChainFromString', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const blockRlp = 'TODO'
        sdk.admin.importChainFromString(blockRlp, {}, callbackOne);
    });
});
