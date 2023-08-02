const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");
const { unlockAccount, getNonce } = require("../../../helpers/eth");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(RPC));

describe('klay_signTransactionAsFeePayer API', () => {
    test('should return klay_signTransactionAsFeePayer', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(/^0x[a-fA-F0-9]+/.test(data.raw)).toBe(true);
            done();
        };
        unlockAccount().then(async address => {
            const nonce = await getNonce(address)
            sdk.signTransactionAsFeePayer({
                "typeInt": 17,
                "from": address,
                "to": "0x44711E89b0c23845b5B2ed9D3716BA42b8a3e075",
                "gas": "0x76c0", "gasPrice": "0x5d21dba00",
                "value": "0xf4",
                "input": "0xb3f98adc0000000000000000000000000000000000000000000000000000000000000001",
                "feePayer": address,
                nonce,
            },
                {}, callbackOne);
        })
    });
});

