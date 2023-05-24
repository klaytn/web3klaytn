package opensdk.sdk.apis.debug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugGetModifiedAccountsByNumberResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugGetModifiedAccountsByNumberExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugGetModifiedAccountsByNumberExample() throws IOException {
        int startBlockNum = 171904;
        int endBlockNum = 172160;
        DebugGetModifiedAccountsByNumberResponse response = sdk.debug.getModifiedAccountsByNumber(startBlockNum, endBlockNum).send();
        response.getResult();
    }
}
