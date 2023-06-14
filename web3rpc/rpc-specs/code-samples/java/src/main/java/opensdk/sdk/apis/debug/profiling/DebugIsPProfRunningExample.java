package opensdk.sdk.apis.debug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugIsPProfRunningResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugIsPProfRunningExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void debugIsPProfRunningExample() throws IOException {
        DebugIsPProfRunningResponse response = w3.debugIsPProfRunning().send();
        response.getResult();
    }
}
