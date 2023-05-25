package org.web3j.protocol.klaytn.core.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.PersonalSendAccountUpdateResponse;
import org.web3j.protocol.klaytn.core.method.response.TransactionObject;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class PersonalSendAccountUpdateExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void personalSendAccountUpdateExample() throws IOException {
        TransactionObject transactionObject = new TransactionObject();
        transactionObject.setFrom("0x1d4e05bb72677cb8fa576149c945b57d13f855e4");
        transactionObject.setKey("0x02a102dbac81e8486d68eac4e6ef9db617f7fbd79a04a3b323c982a09cdfc61f0ae0e8");

        String passphrase = "gr8=B!0@uc$b";

        PersonalSendAccountUpdateResponse response = sdk.personal.sendAccountUpdate(transactionObject, passphrase).send();
        response.getResult();
    }
}
