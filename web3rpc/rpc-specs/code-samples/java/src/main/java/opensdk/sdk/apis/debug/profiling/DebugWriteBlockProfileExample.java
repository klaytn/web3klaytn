package opensdk.sdk.apis.debug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugWriteBlockProfileResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugWriteBlockProfileExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void debugWriteBlockProfileExample() throws IOException {
        String file = "block.profile";

        DebugWriteBlockProfileResponse response = w3.debugWriteBlockProfile(file).send();
        response.getResult();
    }
}
