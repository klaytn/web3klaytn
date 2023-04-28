package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.PersonalSendAccountUpdateResponse;
import opensdk.sdk.models.TransactionObject;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class PersonalSendAccountUpdateExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void personalSendAccountUpdateExample() throws IOException {
        TransactionObject transactionObject = new TransactionObject();
        transactionObject.setFrom("0x1d4e05bb72677cb8fa576149c945b57d13f855e4");
        transactionObject.setTo("0x02a102dbac81e8486d68eac4e6ef9db617f7fbd79a04a3b323c982a09cdfc61f0ae0e8");

        String passphrase = "helloWorld";

        PersonalSendAccountUpdateResponse response = sdk.personal.sendAccountUpdate(transactionObject, passphrase).send();
        response.getResult();
    }
}
