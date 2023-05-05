package opensdk.sdk.apis.klaytnDebug.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugChaindbPropertyResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugChaindbPropertyExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugChaindbPropertyExample() throws IOException {
        String property = "0xe17d821e9a8a8736b9aea8c2de1f3a4934ac0a2f";

        DebugChaindbPropertyResponse response = sdk.debug.chaindbProperty(property).send();
        response.getResult();
    }
}
