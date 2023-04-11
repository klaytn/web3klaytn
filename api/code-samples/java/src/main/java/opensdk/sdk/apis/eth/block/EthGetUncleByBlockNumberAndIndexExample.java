package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetUncleByBlockNumberAndIndexResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetUncleByBlockNumberAndIndexExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethGetUncleByBlockNumberAndIndexExample() throws IOException {
        String blockTag = "0xe8";
        String uncleIndex = "0x1";
        EthGetUncleByBlockNumberAndIndexResponse response = sdk.eth.getUncleByBlockNumberAndIndex(blockTag, uncleIndex).send();
        response.getResult();
    }
}
