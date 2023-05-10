const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('admin_startWS API', () => {
    test('should return admin_startWS', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()

            done();
        };
        const host = '127.0.0.1'
        const port = 8552
        const cors = ''
        const apis = 'klay'
        sdk.admin.startWS({ host, port, cors, apis }, callbackOne);
    });
});
