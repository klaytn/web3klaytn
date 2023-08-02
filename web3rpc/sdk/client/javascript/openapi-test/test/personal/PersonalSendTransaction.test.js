const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");
const { unlockAccount } = require("../../helpers/eth");

const sdk = new OpenSdk.PersonalApi(new OpenSdk.ApiClient(RPC));

describe('personal_sendTransaction API', () => {
    test('should return personal_sendTransaction', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(data).toMatch(/^0x.*$/gm)
            done();
        };
        unlockAccount().then(async (address) => {
            const password = "helloWorld";

            sdk.sendTransaction({
                "from": address,
                "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
                "value": "0x1",
                "gas": "0x9999",
                "maxFeePerGas": "0x5d21dba00",
                "maxPriorityFeePerGas": "0x5d21dba00"
            }, password, {}, callbackOne);
        })
    });
})