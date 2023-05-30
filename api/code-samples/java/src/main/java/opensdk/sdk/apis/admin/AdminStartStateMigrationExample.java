package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminStartStateMigrationResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminStartStateMigrationExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void adminStartStateMigrationExample() throws IOException {
        AdminStartStateMigrationResponse response = w3.adminStartStateMigration().send();
        response.getResult();
    }
}
