package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetHeaderByNumberResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetHeaderByNumberExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethGetHeaderByNumberExample() throws IOException {
        EthGetHeaderByNumberResponse br = sdk.eth.getHeaderByNumber(
            "0x1b4")
        .send();
        br.getResult();
    }
}
