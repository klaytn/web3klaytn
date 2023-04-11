package opensdk.sdk.apis.eth.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetRawTransactionByHashResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetRawTransactionByHashExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void ethGetRawTransactionByHashExample() throws IOException {
        EthGetRawTransactionByHashResponse er = sdk.eth.getRawTransactionByHash(
            "0x5bbcde52084defa9d1c7068a811363cc27a25c80d7e495180964673aa5f47687")
        .send();
        er.getResult();
    }
}
