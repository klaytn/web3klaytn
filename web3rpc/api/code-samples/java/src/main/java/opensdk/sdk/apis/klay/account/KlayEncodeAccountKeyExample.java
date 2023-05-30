package opensdk.sdk.apis.klay.account;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import opensdk.sdk.apis.constant.UrlConstants;
import org.klaytn.OpenSDK;
import org.web3j.protocol.klaytn.core.method.response.KlayEncodeAccountKeyResponse;

import java.io.IOException;

public class KlayEncodeAccountKeyExample {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.LOCAL_URL));

    void klayEncodeAccountKeyExample() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        ObjectNode node = objectMapper.createObjectNode();
        node.put("keyType", 0);
        node.putNull("key");

        KlayEncodeAccountKeyResponse response = w3.klayEncodeAccountKey(node).send();

        response.getResult();
    }
}
