package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetBlockTransactionCountByNumberResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetBlockTransactionCountByNumberExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void ethGetBlockTransactionCountByNumberExample() throws IOException {
        EthGetBlockTransactionCountByNumberResponse response = sdk.eth.getBlockTransactionCountByNumber("0xe8").send();
        response.getResult();
    }
}
