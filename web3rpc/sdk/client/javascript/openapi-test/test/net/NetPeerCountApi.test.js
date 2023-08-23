const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('net_peerCount API', () => {
    test('should return net_peerCount', (done) => {

        let callbackOne =  function (error, data, response) {
        	
             expect(error).toBeNull();
             expect(data).toBeDefined()
             expect(typeof data === 'number' || /^0x[0-9a-fA-F]+$/.test(data)).toBe(true);
             done();
        };
       
        sdk.net.peerCount( {}, callbackOne);
    });
});
