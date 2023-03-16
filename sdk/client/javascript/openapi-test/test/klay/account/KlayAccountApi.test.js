const Caver = require("caver-javascript");
const {expect} = require("@jest/globals");

let api = new Caver.KlayAccountApi(new Caver.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('accountCreated API', () => {
    test('should return false for Not_Found', (done) => {
        // const address = '0xa4f42d4d2a3a13874406435500950c9bf2d783db';
        // const blockNumber = 'latest';
        // let callbackOne = function (error, data, response) {
        //     // expect(error).toBeNull();
        //     // expect(data.jsonrpc).toBe("2.0");
        //     // console.log('API called successfully. Returned data: ' + JSON.stringify(data));
        //     done();
        // };
        // api.accountCreated(address, blockNumber, callbackOne);
        expect(true).toBe(false)
        done()
    });
});
