const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.DebugApi(new OpenSdk.ApiClient(RPC));

describe('debug_standardTraceBadBlockToFile API', () => {
    test.skip('should return debug_standardTraceBadBlockToFile', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        const blockHash = "0x485fff444481ee28debe50639f312f44e0a09342161a8906a99cf325cc2512a4";

        sdk.standardTraceBadBlockToFile(blockHash, {}, callbackOne);
    });
});

