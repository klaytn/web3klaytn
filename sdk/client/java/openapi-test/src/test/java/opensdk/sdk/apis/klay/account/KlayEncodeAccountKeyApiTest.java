package opensdk.sdk.apis.klay.account;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayEncodeAccountKeyResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayEncodeAccountKeyApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC klay_encodeAccountKey")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
//        KlayEncodeAccountKeyReqParamsInner paramsInner = new KlayEncodeAccountKeyReqParamsInner();
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode obj = mapper.createObjectNode();
//        paramsInner.setKeytype(0);
//        paramsInner.setKey(obj);

        KlayEncodeAccountKeyResponse ar = sdk.klay.encodeAccountKey(0,
            obj)
        .send();
        ar.getResult();
    }
}
