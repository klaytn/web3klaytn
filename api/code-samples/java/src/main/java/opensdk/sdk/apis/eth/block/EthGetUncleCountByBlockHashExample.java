package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetUncleCountByBlockHashResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetUncleCountByBlockHashExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethGetUncleCountByBlockHashExample() throws IOException {
        String blockHash ="0xc9dbfbab67e9a0508bcb3f95ae408023668cef431b805592781a821926715b8a";
        EthGetUncleCountByBlockHashResponse response = sdk.eth.getUncleCountByBlockHash(blockHash).send();
        response.getResult();
    }
}
