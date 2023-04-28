const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('personal_deriveAccount API', () => {
    test.skip('should return personal_deriveAccount', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };

        const url = "url";
        const path = "path";
        const pin = true;

        sdk.personal.deriveAccount(url, path, {pin}, callbackOne);
    });
});

