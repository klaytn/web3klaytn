package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.ExecutionException;

@DisplayName("Personal RPC Test")
public class PersonalSendValueTransferTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC personal_sendValueTransfer")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        String from = "0x413ba0e5f6f00664598b5c80042b1308f4ff1408";

        sdk.personal.unlockAccount(from).send();

        TransactionObject transactionObject = new TransactionObject();
        transactionObject.setFrom(from);
        transactionObject.setTo("0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee");
        transactionObject.setValue("0x1");
        transactionObject.setGas("0x9999");

        Signature signature = new Signature();
        signature.setV("0x7f4");
        signature.setR("0x9e9d1cbf8c1a4e31fcd4e393f3e535cb5fdd625af678cded6a273994d3fafda2");
        signature.setS("0x17306171c0251a16c3e469a00b23c27f3a8fa70c8d3db5b520f076b186d74037");

        transactionObject.setSignatures(List.of(signature));

        String passphrase = "helloWorld";

        EthGetTransactionCountResponse transactionCountResponse = sdk.eth.getTransactionCount(from, "latest").send();
        if (transactionCountResponse.getResult() != null) {
            transactionObject.setNonce(transactionCountResponse.getResult());
        }

        PersonalSendValueTransferResponse response = sdk.personal.sendValueTransfer(transactionObject, passphrase).send();
        response.getResult();
    }

}
