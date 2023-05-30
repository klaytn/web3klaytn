package opensdk.sdk.apis.debug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugVerbosityByIDResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugVerbosityByIDExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void debugVerbosityByIDExample() throws IOException {
        int id = 1;
        int level = 3;

        DebugVerbosityByIDResponse response = w3.debugVerbosityByID(id, level).send();
        response.getResult();
    }
}
