// const OpenSdk = require("@klaytn/web3rpc");
// const { expect } = require("@jest/globals");
// const { RPC } = require("../../constant");

// const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

// describe('eth_newFilter API', () => {
//     test('should return eth_newFilter', (done) => {

//         let callbackOne = function (error, data, response) {
//             expect(error).toBeNull();
//             console.log(data);
//             expect(data).toBeDefined()
//             expect(typeof data === 'number' || /^0x[0-9a-fA-F]+$/.test(data)).toBe(true);
//             done();
//         };
//         const opts = {
//             "fromBlock": "earliest",
//             "toBlock": "latest",
//             "address": "0x87ac99835e67168d4f9a40580f8f5c33550ba88b",
//             "topics": [
//                 "0xd596fdad182d29130ce218f4c1590c4b5ede105bee36690727baa6592bd2bfc8"
//             ]
//         }
//         // params error
//         sdk.eth.newFilter(opts,{}, callbackOne);
//     });
// });
