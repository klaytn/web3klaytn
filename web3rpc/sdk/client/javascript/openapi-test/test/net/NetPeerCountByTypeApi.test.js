const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.NetApi(new OpenSdk.ApiClient(RPC));

describe('net_peerCountByType API', () => {
    test('should return net_peerCountByType', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(typeof data.total === 'number' || /^0x[0-9a-fA-F]+$/.test(data.total)).toBe(true);

            done();
        };

        sdk.peerCountByType({}, callbackOne);
    });
});
