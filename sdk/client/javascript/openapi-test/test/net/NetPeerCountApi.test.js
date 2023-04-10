const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('net_peerCount API', () => {
    test('should return net_peerCount', (done) => {

        let callbackOne =  function (error, data, response) {
        	
             expect(error).toBeNull();
             expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()

             done();
        };
       
        sdk.net.peerCount( {}, callbackOne);
    });
});
