const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('net_version API', () => {
    test('should return net_version', (done) => {

        let callbackOne =  function (error, data, response) {
        	
             expect(error).toBeNull();
             expect(data).toBeDefined()
             done();
        };
       
        sdk.net.version( {}, callbackOne);
    });
});
