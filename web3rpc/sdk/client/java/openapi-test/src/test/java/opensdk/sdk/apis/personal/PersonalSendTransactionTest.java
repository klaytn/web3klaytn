package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.PersonalSendTransactionResponse;
import org.web3j.protocol.klaytn.core.method.response.TransactionObject;
import opensdk.sdk.utils.PersonalUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Personal RPC Test")
public class PersonalSendTransactionTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC personal_sendTransaction")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        PersonalUtils.unlockAccount();
        TransactionObject transactionObject = new TransactionObject();
        transactionObject.setFrom("0x413ba0e5f6f00664598b5c80042b1308f4ff1408");
        transactionObject.setTo("0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee");
        transactionObject.setValue("0x1");

        String password = "helloWorld";

        PersonalSendTransactionResponse response = w3.personalSendTransaction(transactionObject, password).send();
        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertInstanceOf(String.class, response.getResult());
        assertTrue(((String) response.getResult()).matches("^0x.*$"));
    }

}
