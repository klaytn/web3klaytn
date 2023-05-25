package org.web3j.protocol.klaytn.core.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.PersonalListWalletsResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class PersonalListWalletsExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void personalListWalletsExample() throws IOException {
        PersonalListWalletsResponse response = sdk.personal.listWallets()
                .send();
        response.getResult();
    }
}
