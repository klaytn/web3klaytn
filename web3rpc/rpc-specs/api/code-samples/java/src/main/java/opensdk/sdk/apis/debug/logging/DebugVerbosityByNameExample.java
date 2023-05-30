package opensdk.sdk.apis.debug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugVerbosityByNameResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugVerbosityByNameExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void debugVerbosityByNameExample() throws IOException {
        String name = "API";
        int level = 3;

        DebugVerbosityByNameResponse response = w3.debugVerbosityByName(name, level).send();
        response.getResult();
    }
}
