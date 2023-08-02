// const OpenSdk = require("@klaytn/web3rpc");
// const { expect } = require("@jest/globals");
// const { RPC } = require("../../constant");

// const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

// describe('eth_uninstallFilter API', () => {
//     test('should return eth_uninstallFilter', (done) => {

//         let callbackOne = function (error, data, response) {

//             expect(error).toBeNull();
//             expect(data).toBeDefined()
//             expect(typeof data === 'boolean').toBeTruthy()
//             done();
//         };
//         const filterId = '0xb'
//         sdk.eth.uninstallFilter(filterId, {}, callbackOne);
//     });
// });
