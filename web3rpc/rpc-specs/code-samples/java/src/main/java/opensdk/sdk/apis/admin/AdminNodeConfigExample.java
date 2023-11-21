package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.core.methods.response.admin.AdminNodeConfig;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminNodeConfigExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void adminNodeConfigExample() throws IOException {
        AdminNodeConfig response = w3.adminNodeConfig().send();
        response.getResult();
    }
}
