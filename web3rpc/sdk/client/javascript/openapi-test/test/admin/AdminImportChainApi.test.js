const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.AdminApi(new OpenSdk.ApiClient(RPC));

describe('admin_importChain API', () => {
    test('should return admin_importChain', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'boolean').toBeTruthy();
            done();
        };
        const fileName = '/tmp/chain.txt'
        sdk.importChain(fileName, {}, callbackOne);
    });
});
