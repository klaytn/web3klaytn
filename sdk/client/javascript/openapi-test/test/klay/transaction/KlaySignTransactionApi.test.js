const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");
const { getNonce, unlockAccount } = require("../../../helpers/eth");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_signTransaction API', () => {
    test('should return klay_signTransaction', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        unlockAccount().then(async address => {
            const nonce = await getNonce(address)
            sdk.klay.signTransaction({
                "from": address,
                "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
                "value": "0x1",
                "gas": "0x9999",
                nonce
            }, {}, callbackOne);
        })
    });
});

