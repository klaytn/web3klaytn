const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");
const { getRawTransaction, unlockAccount, getNonce } = require("../../../helpers/eth");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_sendRawTransaction API', () => {
    test('should return klay_sendRawTransaction', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(/^0x[a-fA-F0-9]+/.test(data)).toBe(true);
            done();
        };
        unlockAccount().then(async address => {
            const nonce = await getNonce(address)
            const rawTx = await getRawTransaction(nonce)
            sdk.klay.sendRawTransaction(rawTx, {}, callbackOne);
        })
    });
});
