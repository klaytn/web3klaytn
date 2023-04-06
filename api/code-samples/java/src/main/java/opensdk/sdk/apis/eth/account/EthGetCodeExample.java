package opensdk.sdk.apis.eth.account;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetCodeResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetCodeExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethGetCodeExample() throws IOException {
        EthGetCodeResponse br = sdk.eth.getCode(
            "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
            "0x2")
        .send();
        br.getResult();
    }
}
