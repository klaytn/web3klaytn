package org.web3j.example.transactions;


import org.web3j.example.keySample;
import java.io.IOException;
import java.math.BigInteger;
import org.web3j.crypto.KlayCredentials;
import org.web3j.crypto.KlayRawTransaction;
import org.web3j.crypto.KlayTransactionEncoder;
import org.web3j.crypto.transaction.account.AccountKeyPublic;
import org.web3j.crypto.transaction.type.TxType;
import org.web3j.crypto.transaction.type.TxTypeAccountUpdate;
import org.web3j.crypto.transaction.type.TxType.Type;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.response.EthChainId;
import org.web3j.protocol.core.methods.response.EthSendTransaction;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.http.HttpService;
import org.web3j.utils.Numeric;
import org.web3j.protocol.klaytn.core.method.response.TransactionReceipt;

/**
 * 
 */
public class AccountUpdateExample implements keySample {
    /**
     * 
     */

    public static void run(KlayCredentials credentials) throws IOException {

        Web3j web3j = Web3j.build(new HttpService(keySample.BAOBAB_URL));
        KlayCredentials new_credentials = KlayCredentials.create(PUBLIC_KEY_privkey, PUBLIC_KEY_address);

        BigInteger GAS_PRICE = BigInteger.valueOf(50000000000L);
        BigInteger GAS_LIMIT = BigInteger.valueOf(6721950);
        String from = credentials.getAddress();
        EthChainId EthchainId = web3j.ethChainId().send();
        long chainId = EthchainId.getChainId().longValue();
        BigInteger nonce = web3j.ethGetTransactionCount(from, DefaultBlockParameterName.LATEST).send()
                .getTransactionCount();

        BigInteger newPubkey = new_credentials.getEcKeyPair().getPublicKey();

        AccountKeyPublic accountkey = AccountKeyPublic.create(newPubkey);

        TxType.Type type = Type.ACCOUNT_UPDATE;

        KlayRawTransaction raw = KlayRawTransaction.createTransaction(
                type,
                nonce,
                GAS_PRICE,
                GAS_LIMIT,
                from,
                accountkey);

        byte[] signedMessage = KlayTransactionEncoder.signMessage(raw, chainId, credentials);
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

        TxTypeAccountUpdate rawTransaction = TxTypeAccountUpdate.decodeFromRawTransaction(signedMessage);

        System.out.println("TxType : " + rawTransaction.getKlayType());

    }

}
