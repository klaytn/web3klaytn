package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlaySendTransactionResponse;
import opensdk.sdk.models.KlaytnTransactionTypes;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlaySendTransactionExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klaySendTransactionExample() throws IOException {
        String address = "0x413ba0e5f6f00664598b5c80042b1308f4ff1408";
        KlaytnTransactionTypes type = new KlaytnTransactionTypes();
        type.setFrom(address);
        type.setTo("0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee");
        type.setValue("0x0");
        type.setGas("0x9999");
        KlaySendTransactionResponse transactionResponse = sdk.klay.sendTransaction(type).send();
        transactionResponse.getResult();

    }

}
