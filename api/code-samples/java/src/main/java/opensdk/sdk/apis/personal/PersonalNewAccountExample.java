package org.web3j.protocol.klaytn.core.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.PersonalNewAccountResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class PersonalNewAccountExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void personalNewAccountExample() throws IOException {
        PersonalNewAccountResponse response = sdk.personal.newAccount("helloWorld").send();
        response.getResult();
    }
}
