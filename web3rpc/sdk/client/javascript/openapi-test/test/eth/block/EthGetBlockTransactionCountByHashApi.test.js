// const OpenSdk = require("@klaytn/web3rpc");
// const { expect } = require("@jest/globals");
// const { RPC } = require("../../constant");

// const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

// describe('eth_getBlockTransactionCountByHash API', () => {
//     test('should return eth_getBlockTransactionCountByHash', (done) => {

//         let callbackOne = function (error, data, response) {

//             expect(error).toBeNull();
//             expect(data).toBeDefined()
//             if (data !== null) {
//                 expect(typeof data === 'number' || /^0x[0-9a-fA-F]+$/.test(data)).toBe(true);
//             }
//             done();
//         };
//         const blockHash = '0xf54af05b054b05407ba420344757392c2a945fb0206ebe3af302813aba72ee77'
        
//         sdk.eth.getBlockTransactionCountByHash(blockHash, {}, callbackOne);
//     });
// });
