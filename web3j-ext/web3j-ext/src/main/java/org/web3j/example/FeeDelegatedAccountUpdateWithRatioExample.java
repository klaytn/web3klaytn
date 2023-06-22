/**
 * 
 */
package org.web3j.example;

import java.io.IOException;
import java.math.BigInteger;
import org.web3j.crypto.KlayCredentials;
import org.web3j.crypto.KlayRawTransaction;
import org.web3j.crypto.KlaytnTransactionEncoder;
import org.web3j.crypto.transaction.account.AccountKeyPublic;
import org.web3j.crypto.transaction.type.TxType;
import org.web3j.crypto.transaction.type.TxTypeFeeDelegatedAccountUpdate;
import org.web3j.crypto.transaction.type.TxType.Type;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.response.EthChainId;
import org.web3j.protocol.core.methods.response.EthSendTransaction;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.utils.Numeric;

/**
 * 
 */
public class FeeDelegatedAccountUpdateWithRatioExample {
	/**
	 * @param args
	 */
    
    void FeeDelegatedAccountUpdateExampleWithRatio(Web3j web3j, KlayCredentials credentials, KlayCredentials new_credentials) throws IOException {

        BigInteger GAS_PRICE = BigInteger.valueOf(50000000000L);
        BigInteger GAS_LIMIT = BigInteger.valueOf(6721950);
        String from = credentials.getAddress();
        EthChainId EthchainId = web3j.ethChainId().send();
        long chainId = EthchainId.getChainId().longValue();
        BigInteger nonce = web3j.ethGetTransactionCount(from, DefaultBlockParameterName.LATEST).send().getTransactionCount();
        BigInteger value = BigInteger.valueOf(100);
        BigInteger feeRatio = BigInteger.valueOf(30);
        BigInteger newPubkey = new_credentials.getEcKeyPair().getPublicKey();
        
        AccountKeyPublic accountkey = AccountKeyPublic.create(newPubkey);

        TxType.Type type = Type.FEE_DELEGATED_ACCOUNT_UPDATE_WITH_RATIO;


        KlayRawTransaction raw = KlayRawTransaction.createTransaction(
                        type,
                        nonce,
                        GAS_PRICE,
                        GAS_LIMIT,
                        from,
                        accountkey,
                        feeRatio);

        // Sign as sender
        byte[] signedMessage = KlaytnTransactionEncoder.signMessage(raw, chainId, credentials);
        
        // Sign same message as Fee payer
        signedMessage = KlaytnTransactionEncoder.signMessageAsFeePayer(raw, chainId, credentials);
        
         String hexValue = Numeric.toHexString(signedMessage);
         EthSendTransaction transactionResponse = web3j.ethSendRawTransaction(hexValue).send();
         System.out.println(transactionResponse.getResult());
            
         TxTypeFeeDelegatedAccountUpdate rawTransaction = TxTypeFeeDelegatedAccountUpdate.decodeFromRawTransaction(signedMessage);


    }


}
