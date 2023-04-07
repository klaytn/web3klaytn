package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetStorageAtResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetStorageAtExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethGetStorageAtExample() throws IOException {
        EthGetStorageAtResponse br = sdk.eth.getStorageAt(
            "0x295a70b2de5e3953354a6a8344e616ed314d7251",
            "0x0",
            "latest")
        .send();
        br.getResult();
    }
}
