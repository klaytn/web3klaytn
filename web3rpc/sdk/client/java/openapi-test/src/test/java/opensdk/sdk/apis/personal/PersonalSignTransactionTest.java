package opensdk.sdk.apis.personal;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.PersonalSignTransactionResponse;
import org.web3j.protocol.klaytn.core.method.response.TransactionObject;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

@DisplayName("Personal RPC Test")
public class PersonalSignTransactionTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC personal_signTransaction")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        TransactionObject transactionObject = new TransactionObject();
        transactionObject.setFrom("0x413ba0e5f6f00664598b5c80042b1308f4ff1408");
        transactionObject.setTo("0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee");
        transactionObject.setValue("0x1");
        transactionObject.setGas("0x9999");
        transactionObject.setNonce("0x1");
        transactionObject.setGasPrice("0x25000000000");

        String password = "helloWorld";

        PersonalSignTransactionResponse response = w3.personalSignTransaction(transactionObject, password).send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
