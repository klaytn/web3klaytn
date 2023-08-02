// const OpenSdk = require("@klaytn/web3rpc");
// const { expect } = require("@jest/globals");
// const { RPC } = require("../../constant");

// const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

// describe('eth_getTransactionReceipt API', () => {
//     test('should return eth_getTransactionReceipt', (done) => {

//         let callbackOne = function (error, data, response) {

//             expect(error).toBeNull();
//             expect(data).toBeDefined()
//             if (data !== null) {
//                 expect(data.blockNumber).toMatch(/^0x.*$/gm)
//             };
//             done();
//         };
//         const transactionHash = '0xc6acc62baaa57483da8d5e08aaed1907d82f0e25bd553ce3745ef1bc7b7f4476'
//         sdk.eth.getTransactionReceipt(transactionHash, {}, callbackOne);
//     });
// });
