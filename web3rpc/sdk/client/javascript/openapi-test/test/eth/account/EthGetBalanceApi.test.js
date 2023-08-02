// const OpenSdk = require("@klaytn/web3rpc");
// const { expect } = require("@jest/globals");
// const { RPC } = require("../../constant");

// const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

// describe('eth_getBalance API', () => {
//     test('should return eth_getBalance', (done) => {

//         let callbackOne = function (error, data, response) {
//             expect(error).toBeNull();
//             expect(data).toBeDefined()
//             expect(typeof data === 'number' || /^0x[0-9a-fA-F]+$/.test(data)).toBe(true);
//             done();
//         };
//         const address = '0x3111a0577f322e8fb54f78d9982a26ae7ca0f722'
//         const blockNumberOrHashOrTag = 'latest'
//         sdk.eth.getBalance(address, blockNumberOrHashOrTag, {}, callbackOne);
//     });
// });

