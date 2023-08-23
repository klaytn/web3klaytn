package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.*;
import opensdk.sdk.utils.CommonUtils;
import opensdk.sdk.utils.PersonalUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.ExecutionException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Personal RPC Test")
public class PersonalSendValueTransferTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC personal_sendValueTransfer")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        PersonalUtils.unlockAccount();

        TransactionObject transactionObject = new TransactionObject();
        transactionObject.setFrom(CommonUtils.address);
        transactionObject.setTo("0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee");
        transactionObject.setValue("0x1");
        transactionObject.setGas("0x9999");

        Signature signature = new Signature();
        signature.setV("0x7f4");
        signature.setR("0x9e9d1cbf8c1a4e31fcd4e393f3e535cb5fdd625af678cded6a273994d3fafda2");
        signature.setS("0x17306171c0251a16c3e469a00b23c27f3a8fa70c8d3db5b520f076b186d74037");

        transactionObject.setSignatures(List.of(signature));

        String passphrase = "helloWorld";

        KlayGetTransactionCountResponse transactionCountResponse = w3.klayGetTransactionCount(CommonUtils.address, "latest").send();
        if (transactionCountResponse.getResult() != null) {
            transactionObject.setNonce(transactionCountResponse.getResult());
        }

        PersonalSendValueTransferResponse response = w3.personalSendValueTransfer(transactionObject, passphrase).send();
        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertTrue(((String)response.getResult()).matches("^0x.*$"));
    }

}
