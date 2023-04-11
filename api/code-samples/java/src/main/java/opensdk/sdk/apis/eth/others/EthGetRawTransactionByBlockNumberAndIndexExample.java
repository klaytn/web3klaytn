package opensdk.sdk.apis.eth.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetRawTransactionByBlockNumberAndIndexResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetRawTransactionByBlockNumberAndIndexExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void ethGetRawTransactionByBlockNumberAndIndexExample() throws IOException {
        EthGetRawTransactionByBlockNumberAndIndexResponse er = sdk.eth.getRawTransactionByBlockNumberAndIndex(
            118593751,
            "0x0")
        .send();
        er.getResult();
    }
}
