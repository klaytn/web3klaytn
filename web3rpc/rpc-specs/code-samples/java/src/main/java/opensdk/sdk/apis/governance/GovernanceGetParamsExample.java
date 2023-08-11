package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.klaytn.core.method.response.GovernanceGetParamsResponse;

import java.io.IOException;

public class GovernanceGetParamsExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void governanceGetParamsExample() throws IOException {
        int blockTag = 0;
        GovernanceGetParamsResponse response = w3.governanceGetParams(blockTag).send();
        response.getResult();
    }
}
