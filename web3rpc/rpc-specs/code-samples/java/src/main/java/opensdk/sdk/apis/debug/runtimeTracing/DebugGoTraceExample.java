package opensdk.sdk.apis.debug.runtimeTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugGoTraceResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugGoTraceExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void debugGoTraceExample() throws IOException {
        String file = "go.trace";
        int seconds = 5;

        DebugGoTraceResponse response = w3.debugGoTrace(file, seconds).send();
        response.getResult();
    }
}
