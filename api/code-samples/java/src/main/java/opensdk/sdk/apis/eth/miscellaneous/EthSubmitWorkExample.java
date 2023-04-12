package opensdk.sdk.apis.eth.miscellaneous;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthSubmitWorkResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthSubmitWorkExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethSubmitWorkExample() throws IOException {
        String nonce = "0x0000000000000001";
        String powHash = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";
        String mixDigest = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";
        EthSubmitWorkResponse response = sdk.eth.submitWork(nonce, powHash, mixDigest).send();
        response.getResult();
    }
}
