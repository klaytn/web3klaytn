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
import org.web3j.crypto.transaction.type.TxTypeFeeDelegatedSmartContractExecution;
import org.web3j.crypto.transaction.type.TxType.Type;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.response.EthChainId;
import org.web3j.protocol.core.methods.response.EthSendTransaction;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.utils.Numeric;
import org.web3j.protocol.klaytn.core.method.response.TransactionReceipt;
import org.web3j.abi.FunctionEncoder;
import org.web3j.abi.datatypes.Function;
import org.web3j.abi.datatypes.Uint;
import java.util.Arrays;
import java.util.Collections;

/**
 * 
 */
public class InteractWithContractAndFeeDelegateExample implements keySample {
        /**
         * 
         */
        public static void run() throws IOException {

                Web3j web3j = Web3j.build(new HttpService(keySample.BAOBAB_URL));
                KlayCredentials credentials = KlayCredentials.create(keySample.LEGACY_KEY_privkey);
                KlayCredentials credentials_feepayer = KlayCredentials.create(keySample.LEGACY_KEY_FEEPAYER_privkey);
                String contractAddress = "0x8a717ca7D1f620290D3D7535108A17D73253402d";

                BigInteger GAS_PRICE = BigInteger.valueOf(50000000000L);
                BigInteger GAS_LIMIT = BigInteger.valueOf(6721950);
                String from = credentials.getAddress();
                BigInteger nonce = web3j.ethGetTransactionCount(from, DefaultBlockParameterName.LATEST).send()
                                .getTransactionCount();
                EthChainId EthchainId = web3j.ethChainId().send();
                long chainId = EthchainId.getChainId().longValue();
                BigInteger value = BigInteger.ZERO;

                Function function = new Function("set", // Function name
                                Arrays.asList(new Uint(BigInteger.valueOf(50))), // Function input parameters
                                Collections.emptyList()); // Function returned parameters
                String txData = FunctionEncoder.encode(function);
                byte[] payload = Numeric.hexStringToByteArray(txData);

                TxType.Type type = Type.FEE_DELEGATED_SMART_CONTRACT_EXECUTION;

                KlayRawTransaction raw = KlayRawTransaction.createTransaction(
                                type,
                                nonce,
                                GAS_PRICE,
                                GAS_LIMIT,
                                contractAddress,
                                value,
                                from,
                                payload);

                // Sign as sender
                byte[] signedMessage = KlayTransactionEncoder.signMessage(raw, chainId, credentials);

                // Sign same message as Fee payer
                signedMessage = KlayTransactionEncoder.signMessageAsFeePayer(raw, chainId, credentials_feepayer);

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

                TxTypeFeeDelegatedSmartContractExecution rawTransaction = TxTypeFeeDelegatedSmartContractExecution
                                .decodeFromRawTransaction(signedMessage);
                System.out.println("TxType : " + rawTransaction.getKlayType());

        }

}
