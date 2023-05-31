package opensdk.sdk.apis.debug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugWriteMutexProfileResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugWriteMutexProfileExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void debugWriteMutexProfileExample() throws IOException {
        String file = "mutex.profile";

        DebugWriteMutexProfileResponse response = w3.debugWriteMutexProfile(file).send();
        response.getResult();
    }
}
