const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");

const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('klay_getCode API', () => {
    test.skip('should return account code.', (done) => {

        let callbackOne =  function (error, data, response) {
                console.log(error,data);
             expect(error).toBeNull();
             expect(data.jsonrpc).toBe("2.0");
             expect(data.result).toBeDefined()
            //console.log('API called successfully. Returned data: ' + JSON.stringify(data));
             done();
        };
        const account="0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b"
        const blockNumberOrHash="0x2"
        sdk.klay.getCode(account,blockNumberOrHash, {}, callbackOne);
    });
});
