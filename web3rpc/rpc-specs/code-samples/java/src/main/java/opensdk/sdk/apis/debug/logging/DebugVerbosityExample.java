package opensdk.sdk.apis.debug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugVerbosityResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugVerbosityExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void debugVerbosityExample() throws IOException {
        int level = 3;

        DebugVerbosityResponse response = w3.debugVerbosity(level).send();
        response.getResult();
    }
}
