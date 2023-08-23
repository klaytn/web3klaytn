const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");
const { unlockAccount, getNonce, getFeePayerSignatures } = require("../../../helpers/eth");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_sendTransactionAsFeePayer API', () => {
    test('should return klay_signTransactionAsFeePayer', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(/^0x[a-fA-F0-9]+/.test(data)).toBe(true);
            done();
        };
        unlockAccount().then(async address => {
            const nonce = await getNonce(address)
            const tx = {
                "typeInt": 17,
                "from": address,
                "to": "0x44711E89b0c23845b5B2ed9D3716BA42b8a3e075",
                "gas": "0x9999",
                "value": "0x1",
                "input": "0xb3f98adc0000000000000000000000000000000000000000000000000000000000000001",
                "feePayer": address,
                nonce
            }
            const signedTX = await getFeePayerSignatures(tx)

            sdk.klay.sendTransactionAsFeePayer(signedTX,
                {}, callbackOne);
        })
    });
});

