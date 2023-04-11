package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetUncleCountByBlockNumberResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetUncleCountByBlockNumberExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethGetUncleCountByBlockNumberExample() throws IOException {
        String blockTag = "0xe8";
        EthGetUncleCountByBlockNumberResponse response = sdk.eth.getUncleCountByBlockNumber(blockTag).send();
        response.getResult();
    }
}
