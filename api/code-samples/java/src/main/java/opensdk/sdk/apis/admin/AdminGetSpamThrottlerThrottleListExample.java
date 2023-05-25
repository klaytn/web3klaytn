package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminGetSpamThrottlerThrottleListResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminGetSpamThrottlerThrottleListExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void adminGetSpamThrottlerThrottleListExample() throws IOException {
        AdminGetSpamThrottlerThrottleListResponse response = w3.adminGetSpamThrottlerThrottleList().send();
        response.getResult();
    }
}
