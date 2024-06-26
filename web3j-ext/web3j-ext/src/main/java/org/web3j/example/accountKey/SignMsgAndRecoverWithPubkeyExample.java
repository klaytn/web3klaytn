package org.web3j.example.accountKey;

import org.web3j.tx.response.PollingTransactionReceiptProcessor;
import org.web3j.tx.response.TransactionReceiptProcessor;
import org.web3j.example.keySample;
import java.io.IOException;
import org.web3j.crypto.KlayCredentials;
import org.web3j.crypto.KlaySignatureData;
import org.web3j.crypto.Sign.SignatureData;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.klaytn.core.method.response.KlayRecoverFromMessageResponse;

/**
 * 
 */
public class SignMsgAndRecoverWithPubkeyExample implements keySample {
    /**
     * 
     */

    public static void run() throws Exception {
        Web3j web3j = Web3j.build(new HttpService(keySample.BAOBAB_URL));
        KlayCredentials credentials1 = KlayCredentials.create(keySample.PUBLIC_KEY_privkey,
                keySample.PUBLIC_KEY_address);
        String from = credentials1.getAddress();
        String message = "0xdeadbeef";
        String blockNumber = "latest";

        SignatureData signature = KlaySignatureData.signPrefixedMessage(message, credentials1);
        String result = KlaySignatureData.getSignatureString(signature);

        KlayRecoverFromMessageResponse response = web3j.klayRecoverFromMessage(from, message, result, blockNumber)
                .send();
        System.out.println("Original address : " + from);
        System.out.println("Result address : " + response.getResult());

        web3j.shutdown();

    }

}
