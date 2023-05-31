package opensdk.sdk.apis.debug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugStartCPUProfileResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugStartCPUProfileExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void debugStartCPUProfileExample() throws IOException {
        String file = "cpu.profile";

        DebugStartCPUProfileResponse response = w3.debugStartCPUProfile(file).send();
        response.getResult();
    }
}
