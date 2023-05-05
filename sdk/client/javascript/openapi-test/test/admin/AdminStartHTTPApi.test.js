const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('admin_startHTTP API', () => {
    test('should return admin_startHTTP', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const host = '127.0.0.1'
        const port = 8555
        const cors = ''
        const apis = 'klay'
        
        // Must perform start before stop and opposite 
        // Call AdminStopHTTP()
        sdk.admin.startHTTP({ host, port, cors, apis }, callbackOne);
    });
});