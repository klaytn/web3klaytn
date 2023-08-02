// const OpenSdk = require("@klaytn/web3rpc");
// const { expect } = require("@jest/globals");
// const { RPC } = require("../../constant");

// const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

// describe('eth_createAccessList API', () => {
//     test('should return eth_createAccessList', (done) => {

//         let callbackOne = function (error, data, response) {
//             expect(error).toBeNull();
//             expect(data).toBeDefined()
//             expect(Array.isArray(data.accessList)).toBe(true);
//             done();
//         };
//         const transactionArgs = {
//             "from": "0x3bc5885c2941c5cda454bdb4a8c88aa7f248e312",
//             "data": "0x20965255",
//             "gasPrice": "0x3b9aca00",
//             "gas": "0x3d0900",
//             "to": "0x00f5f5f3a25f142fafd0af24a754fafa340f32c7"
//         }
//         const blockNumberOrHash = 'latest'
//         sdk.eth.createAccessList(transactionArgs, blockNumberOrHash, {}, callbackOne);
//     });
// });
