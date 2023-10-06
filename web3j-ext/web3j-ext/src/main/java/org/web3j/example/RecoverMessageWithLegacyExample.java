/**
 * 
 */
package org.web3j.example;

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
public class RecoverMessageWithLegacyExample implements keySample {
    /**
     * 
     */

    public static void run() throws IOException {
        Web3j web3j = Web3j.build(new HttpService(keySample.BAOBAB_URL));
        KlayCredentials credentials1 = KlayCredentials.create(keySample.LEGACY_KEY_privkey);
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
