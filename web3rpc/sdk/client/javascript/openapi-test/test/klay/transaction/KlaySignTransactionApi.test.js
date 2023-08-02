const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");
const { getNonce, unlockAccount } = require("../../../helpers/eth");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(RPC));

describe('klay_signTransaction API', () => {
    test('should return klay_signTransaction', (done) => {

        let callbackOne = function (error, data, response) {klay_signTransactionAsFeePayer
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(/^0x[a-fA-F0-9]+/.test(data.raw)).toBe(true);
            done();
        };
        unlockAccount().then(async address => {
            const nonce = await getNonce(address)
            sdk.signTransaction({
                "from": address,
                "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
                "value": "0x1",
                "gas": "0x9999",
                nonce
            }, {}, callbackOne);
        })
    });
});

