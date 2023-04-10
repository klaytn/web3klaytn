package opensdk.sdk.apis.klay.account;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayEncodeAccountKeyReqParamsInner;
import opensdk.sdk.models.KlayEncodeAccountKeyResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayEncodeAccountKeyExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void klayEncodeAccountKeyExample() throws IOException {
        KlayEncodeAccountKeyReqParamsInner paramsInner = new KlayEncodeAccountKeyReqParamsInner();
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode obj = mapper.createObjectNode();
        paramsInner.setKeytype(0);
        paramsInner.setKey(obj);

        KlayEncodeAccountKeyResponse ar = sdk.klay.encodeAccountKey(
            paramsInner)
        .send();
        ar.getResult();
    }
}
