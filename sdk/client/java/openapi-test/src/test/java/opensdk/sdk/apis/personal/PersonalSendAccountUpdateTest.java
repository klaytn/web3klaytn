package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.PersonalSendAccountUpdateResponse;
import opensdk.sdk.models.TransactionObject;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

@DisplayName("Personal RPC Test")
public class PersonalSendAccountUpdateTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC personal_sendAccountUpdate")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        TransactionObject transactionObject = new TransactionObject();
        transactionObject.setFrom("0x1d4e05bb72677cb8fa576149c945b57d13f855e4");
        transactionObject.setKey("0x02a102dbac81e8486d68eac4e6ef9db617f7fbd79a04a3b323c982a09cdfc61f0ae0e8");

        String passphrase = "gr8=B!0@uc$b";

        PersonalSendAccountUpdateResponse response = sdk.personal.sendAccountUpdate(transactionObject, passphrase).send();
        response.getResult();
    }
}
