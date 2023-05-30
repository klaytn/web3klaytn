package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernanceItemCacheFromDbResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class GovernanceItemCacheFromDbExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void governanceItemCacheFromDbExample() throws IOException {
        int blockNum = 0;

        GovernanceItemCacheFromDbResponse response = w3.governanceItemCacheFromDb(blockNum).send();
        response.getResult();
    }
}
