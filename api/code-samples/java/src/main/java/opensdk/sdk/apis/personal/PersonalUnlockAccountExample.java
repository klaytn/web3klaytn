package org.web3j.protocol.klaytn.core.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.PersonalUnlockAccountResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class PersonalUnlockAccountExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void personalUnlockAccountExample() throws IOException {
        String address = "0xb1ab1f758e0d6398c568936400ea94825c4ebdc2";
        String passphrase = "helloWorld";
        int duration = 30;

        PersonalUnlockAccountResponse response = sdk.personal.unlockAccount(address, passphrase, duration)
                .send();
        response.getResult();
    }
}
