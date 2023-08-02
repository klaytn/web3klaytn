const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.NetApi(new OpenSdk.ApiClient(RPC));

describe('net_networkID API', () => {
    test('should return net_networkID', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(typeof data === 'number').toBe(true);

            done();
        };

        sdk.networkID({}, callbackOne);
    });
});
