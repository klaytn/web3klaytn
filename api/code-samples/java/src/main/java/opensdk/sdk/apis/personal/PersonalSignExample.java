package org.web3j.protocol.klaytn.core.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.PersonalSignResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class PersonalSignExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void personalSignExample() throws IOException {
        String message = "0xdead";
        String address = "0xb44b66f0d6ea803175f921018cba7e914fed25b9";
        String passphrase = "helloWorld";

        PersonalSignResponse response = sdk.personal.sign(message, address, passphrase)
                .send();
        response.getResult();
    }
}
