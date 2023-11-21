const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_traceCall API', () => {
    test('should return debug_traceCall', (done) => {
        console.log(RPC);
        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            done();
        };
        const tracerCallObject = {"to":"0x46eda75e7ca73cb1c2f83c3927211655420dbc44","data":"0x3fb5c1cb00000000000000000000000000000000000000000000000000000000000003e7"};
        const blockNumber = "latest";
        const options = {"tracer":"revertTracer"};

        sdk.debug.traceCall(tracerCallObject, blockNumber, options, {}, callbackOne);
    });
});

