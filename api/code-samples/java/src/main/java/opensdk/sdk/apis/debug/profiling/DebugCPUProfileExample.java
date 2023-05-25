package opensdk.sdk.apis.debug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugCpuProfileResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugCPUProfileExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void debugCpuProfileExample() throws IOException {
        String file = "block.profile";
        int seconds = 4;

        DebugCpuProfileResponse response = w3.debugCpuProfile(file, seconds).send();
        response.getResult();
    }
}
