package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.PersonalListAccountsResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class PersonalListAccountsExample {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void personalListAccountsExample() throws IOException {
        PersonalListAccountsResponse response = w3.personalListAccounts()
                .send();
        response.getResult();
    }
}
