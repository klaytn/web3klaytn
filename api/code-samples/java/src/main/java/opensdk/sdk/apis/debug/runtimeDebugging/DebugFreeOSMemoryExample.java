package opensdk.sdk.apis.debug.runtimeDebugging;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugFreeOSMemoryResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugFreeOSMemoryExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void debugFreeOSMemoryExample() throws IOException {
        DebugFreeOSMemoryResponse response = w3.debugFreeOSMemory().send();
        response.getResult();
    }
}
