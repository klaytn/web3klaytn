const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");
const { unlockAccount } = require("../../helpers/eth");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('personal_sign API', () => {
    test('should return personal_sign', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(data).toMatch(/^0x[0-9a-fA-F]+$/)
            done();
        };
        unlockAccount().then(address => {
            const message = '0xdeadbeaf';
            const password = "helloWorld";

            sdk.personal.sign(message, address, password, {}, callbackOne);
        })
    });
});