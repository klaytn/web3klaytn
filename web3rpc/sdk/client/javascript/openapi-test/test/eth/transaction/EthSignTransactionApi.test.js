const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");
const { unlockAccount, getNonce } = require("../../../helpers/eth");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_signTransaction API', () => {
    test('should return eth_signTransaction', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(data.raw).toMatch(/^0x[0-9a-fA-F]+$/)
            done();
        };
        unlockAccount().then(async address => {
            const nonce = await getNonce(address)
            sdk.eth.signTransaction({
                "from": address,
                "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
                "value": "0x1",
                "gas": "0x9999",
                "maxFeePerGas": "0x5d21dba00",
                "maxPriorityFeePerGas": "0x5d21dba00",
                nonce
            }, {}, callbackOne);
        })
    });
});