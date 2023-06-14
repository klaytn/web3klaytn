package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetFilterChangesResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthGetFilterChangesExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));
    void ethGetFilterChangesExample() throws IOException {
        String id = "0xa07ed87eda2a0a388a1a9b3e372128ec";
        EthGetFilterChangesResponse response = w3.ethGetFilterChanges(id).send();
        response.getResult();
    }
}
