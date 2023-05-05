package opensdk.sdk.apis.klaytnDebug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStartCollectingTrieStatsResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugStartCollectingTrieStatsExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String address = "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b";

        DebugStartCollectingTrieStatsResponse response = sdk.debug.startCollectingTrieStats(address).send();
        response.getResult();
    }
}
