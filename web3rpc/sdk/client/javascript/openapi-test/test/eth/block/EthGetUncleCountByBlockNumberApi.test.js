// const OpenSdk = require("@klaytn/web3rpc");
// const { expect } = require("@jest/globals");
// const { RPC } = require("../../constant");

// const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

// describe('eth_getUncleCountByBlockNumber API', () => {
//     test('should return eth_getUncleCountByBlockNumber', (done) => {

//         let callbackOne = function (error, data, response) {

//             expect(error).toBeNull();
//             expect(data).toBeDefined()
//             if (data !== null) {
//                 expect(typeof data === 'number' || /^0x[0-9a-fA-F]+$/.test(data)).toBe(true);
//             }
//             done();
//         };
//         const blockNumber = 119189116
//         sdk.eth.getUncleCountByBlockNumber(blockNumber, {}, callbackOne);
//     });
// });
