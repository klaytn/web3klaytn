// const OpenSdk = require("@klaytn/web3rpc");
// const { expect } = require("@jest/globals");
// const { RPC } = require("../../constant");

// const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

// describe('eth_submitHashrate API', () => {
//     test('should return eth_submitHashrate', (done) => {

//         let callbackOne = function (error, data, response) {
//             expect(error).toBeNull();
//             expect(data).toBeDefined()
//             expect(typeof data === 'boolean').toBeTruthy()
//             done();
//         };
//         const hashrate = '0x5'
//         const id = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'
//         sdk.eth.submitHashrate(hashrate, id, {}, callbackOne);
//     });
// });
