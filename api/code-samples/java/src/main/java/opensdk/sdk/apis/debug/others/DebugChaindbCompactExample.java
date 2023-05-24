package opensdk.sdk.apis.debug.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugChaindbCompactResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugChaindbCompactExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void DebugChaindbCompactExample() throws IOException {
        DebugChaindbCompactResponse response = sdk.debug.chaindbCompact().send();
        response.getResult();
    }
}
