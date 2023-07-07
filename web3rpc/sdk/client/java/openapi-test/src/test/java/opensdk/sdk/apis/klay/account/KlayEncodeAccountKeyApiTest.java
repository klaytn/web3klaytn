package opensdk.sdk.apis.klay.account;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayEncodeAccountKeyResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayEncodeAccountKeyApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC klay_encodeAccountKey")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        ObjectNode node = objectMapper.createObjectNode();
        node.put("keyType", 0);
        node.putNull("key");

        KlayEncodeAccountKeyResponse response = w3.klayEncodeAccountKey(node).send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
        assertTrue(response.getResult().matches("^0x[a-fA-F0-9]+"));
    }
}
