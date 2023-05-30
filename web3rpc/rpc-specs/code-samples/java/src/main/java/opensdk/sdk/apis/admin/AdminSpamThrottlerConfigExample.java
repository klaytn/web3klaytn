package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminSpamThrottlerConfigResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminSpamThrottlerConfigExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void adminSpamThrottlerConfigExample() throws IOException {
        AdminSpamThrottlerConfigResponse response = w3.adminSpamThrottlerConfig().send();
        response.getResult();
    }
}
