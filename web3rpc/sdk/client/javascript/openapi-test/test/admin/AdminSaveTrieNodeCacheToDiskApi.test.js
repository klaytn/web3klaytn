const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('admin_saveTrieNodeCacheToDisk API', () => {
    test('should return admin_saveTrieNodeCacheToDisk', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data).toBeNull();
            done();
        };

        sdk.admin.saveTrieNodeCacheToDisk({}, callbackOne);
    });
});
