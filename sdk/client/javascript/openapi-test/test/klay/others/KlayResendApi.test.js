
const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");
const { unlockAccount } = require("../../../helpers/eth");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_resend API', () => {
    test.skip('should return klay_resend', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        unlockAccount().then(address => {
            const oldTrx = {
                "from": "0x487f2dfef230c2120b8cc55c5087b103146536ec",
                "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
                "value": "0x1",
                "gas": "0x9999",
                "gasPrice": "0xba43b7400",
                "nonce": "0x21",
            }
            const gasPrice = '0xba43b7400';
            const gasLimit = '0xe8d4a50fff'
            sdk.klay.resend(oldTrx, gasPrice, gasLimit, {}, callbackOne);
        })
    });
});
