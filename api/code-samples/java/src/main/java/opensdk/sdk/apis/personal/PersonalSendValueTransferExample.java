package org.web3j.protocol.klaytn.core.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.PersonalSendValueTransferResponse;
import org.web3j.protocol.klaytn.core.method.response.TransactionObject;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

public class PersonalSendValueTransferExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void personalSendValueTransferExample() throws IOException, ExecutionException, InterruptedException {
        TransactionObject transactionObject = new TransactionObject();
        transactionObject.setFrom("0x1d4e05bb72677cb8fa576149c945b57d13f855e4");
        transactionObject.setTo("0xafa3f8684e54059998bc3a7b0d2b0da075154d66");
        transactionObject.setValue("0x1230000000");

        String passphrase = "helloWorld";

        PersonalSendValueTransferResponse response = sdk.personal.sendValueTransfer(transactionObject, passphrase).send();
        response.getResult();
    }

}
