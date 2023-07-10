package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.PersonalSendAccountUpdateResponse;
import org.web3j.protocol.klaytn.core.method.response.TransactionObject;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Personal RPC Test")
public class PersonalSendAccountUpdateTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC personal_sendAccountUpdate")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        TransactionObject transactionObject = new TransactionObject();
        transactionObject.setFrom("0x5c692652c5df87775737bbd3ce8a164e9572fb58");
        transactionObject.setKey("0x01c0");

        String passphrase = "helloWorld";

        PersonalSendAccountUpdateResponse response = w3.personalSendAccountUpdate(transactionObject, passphrase).send();
        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertTrue(((String) response.getResult()).matches("^0x[0-9a-fA-F]+$"));
    }
}
