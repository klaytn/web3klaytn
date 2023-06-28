const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");
const { unlockAccount, signTxEth, getNonce } = require("../../../helpers/eth");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_sendRawTransaction API', () => {
    test('should return eth_sendRawTransaction', (done) => {

        let callbackOne = function (error, data, response) {
            
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data).toMatch(/^0x[0-9a-fA-F]+$/)
            done();
        };
        unlockAccount().then(async address => {
            const nonce = await getNonce(address)
            const rawTx = await signTxEth(nonce)
            sdk.eth.sendRawTransaction(rawTx, {}, callbackOne);
        })
    });
});
