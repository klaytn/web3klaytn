// const OpenSdk = require("@klaytn/web3rpc");
// const { expect } = require("@jest/globals");
// const { RPC } = require("../../constant");

// const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

// describe('eth_getBlockByNumber API', () => {
//     test('should return eth_getBlockByNumber', (done) => {

//         let callbackOne = function (error, data, response) {

//             expect(error).toBeNull();
//             expect(data).toBeDefined()
//             if (data !== null) {
//                 expect(data.number).toMatch(/^0x.*$/gm)
//             }
//             done();
//         };
//         const blockNumber = 1
//         const transactionObject = true
//         sdk.eth.getBlockByNumber(blockNumber, transactionObject, {}, callbackOne);
//     });
// });
