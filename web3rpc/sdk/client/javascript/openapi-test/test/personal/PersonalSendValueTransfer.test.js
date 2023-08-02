const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");
const { getNonce, unlockAccount } = require("../../helpers/eth");

const sdk = new OpenSdk.PersonalApi(new OpenSdk.ApiClient(RPC));

describe('personal_sendValueTransfer API', () => {
    test('should return personal_sendValueTransfer', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(data).toMatch(/^0x.*$/gm)
            done();
        };
        unlockAccount().then(async address => {
            const password = "helloWorld";
            const nonce = await getNonce(address)
            sdk.sendValueTransfer({
                "from": address,
                "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
                "value": "0x1",
                "gas": "0x9999",
                "txSignatures": [{"v":"0x7f4","r":"0x9e9d1cbf8c1a4e31fcd4e393f3e535cb5fdd625af678cded6a273994d3fafda2","s":"0x17306171c0251a16c3e469a00b23c27f3a8fa70c8d3db5b520f076b186d74037"}],
                nonce
            }, password, {}, callbackOne);
        })
    });
});

