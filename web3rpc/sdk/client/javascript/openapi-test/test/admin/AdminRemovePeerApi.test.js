const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.AdminApi(new OpenSdk.ApiClient(RPC));

describe('admin_removePeer API', () => {
    test('should return admin_removePeer', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'boolean').toBeTruthy();
            done();
        };
        const url = 'kni://a979fb575495b8d6db44f750317d0f4622bf4c2aa3365d6af7c284339968eef29b69ad0dce72a4d8db5ebb4968de0e3bec910127f134779fbcb0cb6d3331163c@10.0.0.1:32323'
        sdk.removePeer(url, {}, callbackOne);
    });
});
