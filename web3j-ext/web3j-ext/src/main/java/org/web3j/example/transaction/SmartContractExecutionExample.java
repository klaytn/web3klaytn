/**
 * 
 */
package org.web3j.example.transaction;

import java.io.IOException;
import java.math.BigInteger;
import org.web3j.crypto.KlayCredentials;
import org.web3j.crypto.KlayRawTransaction;
import org.web3j.crypto.KlayTransactionEncoder;
import org.web3j.crypto.transaction.type.TxType;
import org.web3j.crypto.transaction.type.TxTypeSmartContractExecution;
import org.web3j.crypto.transaction.type.TxType.Type;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.response.EthChainId;
import org.web3j.protocol.core.methods.response.EthSendTransaction;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.utils.Numeric;
import org.web3j.protocol.klaytn.core.method.response.TransactionReceipt;
import org.web3j.example.keySample;
/**
 * 
 */
public class SmartContractExecutionExample implements keySample {
        /**
         * 
         */

        public static void run() throws IOException {

                Web3j web3j = Web3j.build(new HttpService(keySample.BAOBAB_URL));
                KlayCredentials credentials = KlayCredentials.create(keySample.LEGACY_KEY_privkey);

                BigInteger GAS_PRICE = BigInteger.valueOf(50000000000L);
                BigInteger GAS_LIMIT = BigInteger.valueOf(6721950);
                String from = credentials.getAddress();
                BigInteger nonce = web3j.ethGetTransactionCount(from, DefaultBlockParameterName.LATEST).send()
                                .getTransactionCount();
                String data = "0xcfae3217";
                EthChainId EthchainId = web3j.ethChainId().send();
                long chainId = EthchainId.getChainId().longValue();
                String to = "0xc58294ecde8fdb288fd845e7a43a56564b597bdb";
                byte[] payload = Numeric.hexStringToByteArray(data);

                BigInteger value = BigInteger.ZERO;

                TxType.Type type = Type.SMART_CONTRACT_EXECUTION;

                KlayRawTransaction raw = KlayRawTransaction.createTransaction(
                                type,
                                nonce,
                                GAS_PRICE,
                                GAS_LIMIT,
                                to,
                                value,
                                from,
                                payload);

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

                TxTypeSmartContractExecution rawTransaction = TxTypeSmartContractExecution
                                .decodeFromRawTransaction(signedMessage);
                System.out.println("TxType : " + rawTransaction.getKlayType());

        }

}
