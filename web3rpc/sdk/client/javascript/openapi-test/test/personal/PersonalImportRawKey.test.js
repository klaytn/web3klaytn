const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");
const { genHexString } = require("../../helpers/eth");

const sdk = new OpenSdk.PersonalApi(new OpenSdk.ApiClient(RPC));

describe('personal_importRawKey API', () => {
    test('should return personal_importRawKey', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        const privateKey = genHexString()
        const passphrase = "hello@1234"

        sdk.importRawKey(privateKey, passphrase, {}, callbackOne);
    });
});

