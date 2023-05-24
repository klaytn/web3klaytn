const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_startContractWarmUp API', () => {
    test('should return debug_startContractWarmUp', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        const address = "0xfD1d63a152f7A7Ef14bd157C1c73c5bC3239EA5D"

        sdk.debug.startContractWarmUp(address, {}, callbackOne);
    });
});

