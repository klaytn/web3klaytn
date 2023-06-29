const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_createAccessList API', () => {
    test('should return klay_createAccessList', (done) => {

        let callbackOne = function (error, data, response) {
            console.log(data);
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(typeof data === 'object').toBe(true)
            expect(data?.gasUsed).toBeDefined()
            expect(data?.accessList).toBeDefined()
            done();
        };
        const callObject = {
            "from": "0x3bc5885c2941c5cda454bdb4a8c88aa7f248e312",
            "to": "0x00f5f5f3a25f142fafd0af24a754fafa340f32c7",
            "gas": "0x3d0900",
            "gasPrice": "0x3b9aca00",
            "data": "0x20965255"
        }
        const blockParameter = 'latest'
        sdk.klay.createAccessList(callObject, { blockParameter }, callbackOne);
    });
});

