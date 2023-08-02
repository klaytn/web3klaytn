
// const OpenSdk = require("@klaytn/web3rpc");
// const { expect } = require("@jest/globals");
// const { PN_RPC } = require("../../constant");
// const { getNoncePending, unlockAccountPN, sendTransactionPN } = require("../../../helpers/eth");

// const sdk = new OpenSdk(new OpenSdk.ApiClient(PN_RPC));

// describe('eth_resend API', () => {
//     test.skip('should return eth_resend', (done) => {

//         let callbackOne = function (error, data, response) {
//             expect(error).toBeNull();
//             expect(data.result).toBeDefined()
//             done();
//         };

//         unlockAccountPN().then(async address => {
//             sendTransactionPN(address)
//             const noncePending = await getNoncePending();
//             const oldTrx = {
//                 "from": address,
//                 "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
//                 "value": "0x1",
//                 "gas": "0x9999",
//                 "maxFeePerGas": "0x5d21dba00",
//                 "maxPriorityFeePerGas": "0x5d21dba00",
//                 "nonce": noncePending,
//             }
//             const gasPrice = '0xba43b7500';
//             const gasLimit = '0xe8d4a50fff';
//             sdk.eth.resend(oldTrx, gasPrice, gasLimit, {}, callbackOne);
//         })
//     });
// });
