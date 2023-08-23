const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('Klay forkStatus  API', () => {
    test('should return forkStatus', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'object').toBe(true);
            done();
        };
        const forkNumber = 20
        sdk.klay.forkStatus(forkNumber, {}, callbackOne);
    });
});
