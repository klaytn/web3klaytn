const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('personal_sendAccountUpdate API', () => {
    test('should return personal_sendAccountUpdate', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        
        const tx =   {
            "from":"0x1d4e05bb72677cb8fa576149c945b57d13f855e4",
            "key":"0x02a102dbac81e8486d68eac4e6ef9db617f7fbd79a04a3b323c982a09cdfc61f0ae0e8"
        };
        const passphrase = "gr8=B!0@uc$b";

        sdk.personal.sendAccountUpdate(tx, passphrase, {}, callbackOne);
    });
});

