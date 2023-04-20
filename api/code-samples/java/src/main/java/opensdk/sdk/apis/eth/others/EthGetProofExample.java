package opensdk.sdk.apis.eth.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetProofResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.util.Arrays;

public class EthGetProofExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    void ethGetProofExample() throws IOException {
        String blockNumber = "latest";
        EthGetProofResponse response = sdk.eth.getProof("0xe5cB067E90D5Cd1F8052B83562Ae670bA4A211a8",
                Arrays.asList("0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"),
                blockNumber).send();
        response.getResult();
    }
}
