package org.web3j.protocol.klaytn.core.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.PersonalSendTransactionResponse;
import org.web3j.protocol.klaytn.core.method.response.TransactionObject;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

public class PersonalSendTransactionExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void personalSendTransactionExample() throws IOException, ExecutionException, InterruptedException {
        TransactionObject transactionObject = new TransactionObject();
        transactionObject.setFrom("0x413ba0e5f6f00664598b5c80042b1308f4ff1408");
        transactionObject.setTo("0x8cd4b6b24f2cd0b83d49876f932254823e875547");
        transactionObject.setValue("0x1");

        String password = "helloWorld";

        PersonalSendTransactionResponse response = sdk.personal.sendTransaction(transactionObject, password).send();
        response.getResult();
    }

}
