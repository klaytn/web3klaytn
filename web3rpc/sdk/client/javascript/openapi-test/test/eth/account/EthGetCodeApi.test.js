// const OpenSdk = require("@klaytn/web3rpc");
// const { expect } = require("@jest/globals");
// const { RPC } = require("../../constant");

// const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

// describe('eth_getCode API', () => {
//     test('should return eth_getCode', (done) => {

//         let callbackOne = function (error, data, response) {

//             expect(error).toBeNull();
//             expect(data).toBeDefined()
//             expect(data).toMatch(/^0x.*$/gm)
//             done();
//         };

//         const address = '0x623fa116b9cac1709b490dc24d6408b14220214f'
//         const blockNumberOrHash = 'latest'
//         sdk.eth.getCode(address, blockNumberOrHash, {}, callbackOne);
//     });
// });
