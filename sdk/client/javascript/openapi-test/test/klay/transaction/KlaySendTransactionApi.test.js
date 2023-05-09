const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC,PN_RPC } = require("../../constant");
const { unlockAccount, unlockAccountPN } = require("../../../helpers/eth");

const sdk = new OpenSdk(new OpenSdk.ApiClient(PN_RPC));

describe('klay_sendTransaction API', () => {
    test('should return klay_sendTransaction', (done) => {

        let callbackOne = function (error, data, response) {
            console.log(data);
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        unlockAccountPN().then(address => {
            sdk.klay.sendTransaction({
                "from": address,
                "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
                "value": "0x1",
                "gas": "0x9999",
                "maxFeePerGas": "0x5d21dba00",
                "maxPriorityFeePerGas": "0x5d21dba00"
            }, {}, callbackOne);
        })
    });
});