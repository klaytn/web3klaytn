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
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.utils.Numeric;

/**
 * 
 */
public class FeeDelegatedSmartContractExecutionExample {
	/**
	 * @param args
	 */
    
    void FeeDelegatedSmartContractExecutionExample(Web3j web3j, KlayCredentials credentials) throws IOException {

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

        TxType.Type type = Type.FEE_DELEGATED_SMART_CONTRACT_EXECUTION;


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
         System.out.println(transactionResponse.getResult());
            
         TxTypeFeeDelegatedSmartContractExecution rawTransaction = TxTypeFeeDelegatedSmartContractExecution.decodeFromRawTransaction(signedMessage);


    }


}
