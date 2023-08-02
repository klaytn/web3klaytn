const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(RPC));

describe('klay_isContractAccount API', () => {
    test('should return klay_isContractAccount', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'boolean').toBe(true);
            done();
        };

        const account = '0xc94770007dda54cF92009BFF0dE90c06F603a09f'
        const blockNumberOrHashOrTag = 'latest'
        sdk.isContractAccount(account, blockNumberOrHashOrTag, {}, callbackOne);
    });
});

