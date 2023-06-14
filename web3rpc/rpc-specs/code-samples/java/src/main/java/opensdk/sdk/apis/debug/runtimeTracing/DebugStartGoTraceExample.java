package opensdk.sdk.apis.debug.runtimeTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugStartGoTraceResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugStartGoTraceExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void debugStartGoTraceExample() throws IOException {
        String file = "go.trace";

        DebugStartGoTraceResponse response = w3.debugStartGoTrace(file).send();
        response.getResult();
    }
}
