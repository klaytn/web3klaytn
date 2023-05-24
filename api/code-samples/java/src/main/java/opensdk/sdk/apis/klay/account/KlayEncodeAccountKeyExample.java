package org.web3j.protocol.klaytn.core.klay.account;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayEncodeAccountKeyResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

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
