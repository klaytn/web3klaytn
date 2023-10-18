/**
 * 
 */
package org.web3j.example;

import java.io.IOException;
import java.math.BigInteger;
import org.web3j.crypto.KlayCredentials;
import org.web3j.crypto.KlayRawTransaction;
import org.web3j.crypto.KlayTransactionEncoder;
import org.web3j.crypto.transaction.type.TxType;
import org.web3j.crypto.transaction.type.TxTypeValueTransfer;
import org.web3j.crypto.transaction.type.TxType.Type;
import org.web3j.protocol.core.methods.response.EthChainId;
import org.web3j.protocol.core.methods.response.EthSendTransaction;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.utils.Numeric;
import org.web3j.protocol.klaytn.core.method.response.TransactionReceipt;

/**
 * 
 */
public class FillTransactionExample implements keySample {
    /**
     * 
     */

    public static void run() throws IOException {
        Web3j web3j = Web3j.build(new HttpService(keySample.BAOBAB_URL));
        KlayCredentials credentials = KlayCredentials.create(keySample.LEGACY_KEY_privkey);

        BigInteger GAS_LIMIT = BigInteger.valueOf(6721950);
        String from = credentials.getAddress();
        String to = "0x000000000000000000000000000000000000dead";

        BigInteger value = BigInteger.valueOf(100);

        TxType.Type type = Type.VALUE_TRANSFER;

        KlayRawTransaction raw = KlayRawTransaction.createTransaction(
                0, // set chainId to zero
                type,
                BigInteger.ZERO, // set nonce to zero
                BigInteger.ZERO, // set Gas price to zero
                GAS_LIMIT,
                to,
                value,
                from);

        // Fill transaction with fillTransaction
        KlayRawTransaction raw_fillTransaction = raw.fillTransaction(web3j);

        byte[] signedMessage = KlayTransactionEncoder.signMessage(raw_fillTransaction, credentials);
        String hexValue = Numeric.toHexString(signedMessage);
        EthSendTransaction transactionResponse = web3j.ethSendRawTransaction(hexValue).send();
        System.out.println("TxHash : \n " + transactionResponse.getResult());
        String txHash = transactionResponse.getResult();
        try {
            Thread.sleep(2000);
        } catch (Exception e) {
            System.out.println(e);
        }
        TransactionReceipt receipt = web3j.klayGetTransactionReceipt(txHash).send().getResult();
        System.out.println("receipt : \n" + receipt);
        web3j.shutdown();

        TxTypeValueTransfer rawTransaction = TxTypeValueTransfer.decodeFromRawTransaction(signedMessage);
        System.out.println("TxType : " + rawTransaction.getKlayType());

    }

}
