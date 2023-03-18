const OpenSdk = require("opensdk-javascript");
const {expect} = require("@jest/globals");

const api = new OpenSdk.KlayApi(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('Klay getRewards API', () => {
    test('should return info of a block number', (done) => {
        // let callbackOne = function (error, data, response) {
        //     // expect(error).toBeNull();
        //     // expect(data.jsonrpc).toBe("2.0");
        //     // console.log('API called successfully. Returned data: ' + JSON.stringify(data));
        //     done();
        // };
        // api.getRewards(1, callbackOne);
        expect(true).toBe(false)
        done()
    });
});
