const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");
const { unlockAccount } = require("../../../helpers/eth");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_sign API', () => {
    test('should return klay_sign', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };
        unlockAccount().then(address => {

            const message = '0xdeadbeaf'
            sdk.klay.sign(address, message, {}, callbackOne);
        })
    });
});

