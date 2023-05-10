const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('admin_importChain API', () => {
    test('should return admin_importChain', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };
        const fileName = '/tmp/chain.txt'
        sdk.admin.importChain(fileName, {}, callbackOne);
    });
});
