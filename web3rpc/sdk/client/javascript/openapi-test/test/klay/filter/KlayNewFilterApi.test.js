const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(RPC));

describe('klay_newFilter API', () => {
    test('should return klay_newFilter', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(/^0x[a-f0-9]+/.test(data)).toBe(true);
            done();
        };
        const fromBlock = 'earliest'
        const toBlock = 'latest'
        const address = '0x87ac99835e67168d4f9a40580f8f5c33550ba88b'
        const topics = [
            '0xd596fdad182d29130ce218f4c1590c4b5ede105bee36690727baa6592bd2bfc8'
        ]

        sdk.newFilter({ fromBlock, toBlock, address, topics }, {}, callbackOne);
    });
});