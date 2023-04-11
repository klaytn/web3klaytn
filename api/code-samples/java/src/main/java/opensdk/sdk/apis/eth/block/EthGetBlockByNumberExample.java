package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetBlockByNumberResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetBlockByNumberExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethGetBlockByNumberExample() throws IOException {
        EthGetBlockByNumberResponse er = sdk.eth.getBlockByNumber(
            "0x8f668",
            false)
        .send();
        er.getResult();
    }
}
