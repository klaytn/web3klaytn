package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernanceVoteResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class GovernanceVoteExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    void governanceVoteExample() throws IOException {
        String key = "governance.governancemode";
        String value = "ballot";

        GovernanceVoteResponse response = w3.governanceVote(key, value).send();
        response.getResult();
    }
}
