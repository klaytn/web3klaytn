package opensdk.sdk.apis.eth.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthSendTransactionResponse;
import opensdk.sdk.models.TransactionArgs;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthSendTransactionExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void ethSendTransactionExample() throws IOException {
        TransactionArgs tx = new TransactionArgs();
        tx.setFrom("0x487f2dfef230c2120b8cc55c5087b103146536ec");
        tx.setTo("0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee");
        tx.setValue("0x1");
        tx.setGas("0x9999");
        tx.setMaxFeePerGas("0x5d21dba00");
        tx.setMaxPriorityFeePerGas("0x5d21dba00");

        EthSendTransactionResponse transactionResponse = sdk.eth.sendTransaction(tx).send();
        transactionResponse.getResult();
    }
}
