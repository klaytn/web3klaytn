package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetUncleByBlockHashAndIndexResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetUncleByBlockHashAndIndexExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethGetUncleByBlockHashAndIndexExample() throws IOException {
        String blockHash = "0xc9dbfbab67e9a0508bcb3f95ae408023668cef431b805592781a821926715b8a";
        String uncleIndex = "0x1";
        EthGetUncleByBlockHashAndIndexResponse response = sdk.eth.getUncleByBlockHashAndIndex(blockHash, uncleIndex).send();
        response.getResult();
    }
}
