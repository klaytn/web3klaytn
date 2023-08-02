const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.NetApi(new OpenSdk.ApiClient(RPC));

describe('net_listening API', () => {
    test('should return net_listening', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(typeof data === 'boolean').toBeTruthy()

            done();
        };

        sdk.listening({}, callbackOne);
    });
});
