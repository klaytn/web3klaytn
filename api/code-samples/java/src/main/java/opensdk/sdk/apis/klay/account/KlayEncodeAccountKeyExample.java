package opensdk.sdk.apis.klay.account;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayEncodeAccountKeyResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayEncodeAccountKeyExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void klayEncodeAccountKeyExample() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        ObjectNode node = objectMapper.createObjectNode();
        node.put("keyType", 0);
        node.putNull("key");

        KlayEncodeAccountKeyResponse response = sdk.klay.encodeAccountKey(node).send();

        response.getResult();
    }
}
