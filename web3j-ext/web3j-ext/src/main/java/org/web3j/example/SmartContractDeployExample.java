/**
 * 
 */
package org.web3j.example;

import java.io.IOException;
import java.math.BigInteger;
import org.web3j.crypto.KlayCredentials;
import org.web3j.crypto.KlayRawTransaction;
import org.web3j.crypto.KlaytnTransactionEncoder;
import org.web3j.crypto.transaction.type.TxType;
import org.web3j.crypto.transaction.type.TxTypeSmartContractDeploy;
import org.web3j.crypto.transaction.type.TxType.Type;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.response.EthChainId;
import org.web3j.protocol.core.methods.response.EthSendTransaction;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.utils.Numeric;

/**
 * 
 */
public class SmartContractDeployExample {
	/**
	 * @param args
	 */
    
    void SmartContractDeployExample(Web3j web3j, KlayCredentials credentials) throws IOException {

        BigInteger GAS_PRICE = BigInteger.valueOf(50000000000L);
        BigInteger GAS_LIMIT = BigInteger.valueOf(6721950);
        String from = credentials.getAddress();
        EthChainId EthchainId = web3j.ethChainId().send();
        long chainId = EthchainId.getChainId().longValue();
        String to = "0x000000000000000000000000000000000000dead";
        BigInteger nonce = web3j.ethGetTransactionCount(from, DefaultBlockParameterName.LATEST).send().getTransactionCount();
        BigInteger value = BigInteger.valueOf(100);
        String data = "0x608060405234801561001057600080fd5b506040516020806102fb8339810180604052602081101561003057600080fd5b810190808051906020019092919050505033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160026000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055508060ff166003816100fd919061010c565b50600f6000819055505061015f565b815481835581811115610133578183600052602060002091820191016101329190610138565b5b505050565b61015c91905b80821115610158576000808201600090555060010161013e565b5090565b90565b61018d8061016e6000396000f3fe60806040526004361061003b576000357c010000000000000000000000000000000000000000000000000000000090048063b3f98adc14610040575b600080fd5b34801561004c57600080fd5b5061007c6004803603602081101561006357600080fd5b81019080803560ff16906020019092919050505061007e565b005b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff16806100e657506003805490508260ff1610155b156100f1575061015e565b60018160010160006101000a81548160ff021916908315150217905550818160010160016101000a81548160ff021916908360ff160217905550806000015460038360ff1681548110151561014257fe5b9060005260206000200160000160008282540192505081905550505b5056fea165627a7a72305820dad6d3e144a160eb6e34d8d99084ed29d207271e201aaac513007f652a26e2200029";
        byte[] payload = data.getBytes();
        BigInteger codeFormat = BigInteger.ZERO;

        TxType.Type type = Type.SMART_CONTRACT_DEPLOY;


        KlayRawTransaction raw = KlayRawTransaction.createTransaction(
                        type,
                        nonce,
                        GAS_PRICE,
                        GAS_LIMIT,
                        to,
                        value,
                        from,
                        payload,
                        codeFormat);

         byte[] signedMessage = KlaytnTransactionEncoder.signMessage(raw, chainId, credentials);
         String hexValue = Numeric.toHexString(signedMessage);
         EthSendTransaction transactionResponse = web3j.ethSendRawTransaction(hexValue).send();
         System.out.println(transactionResponse.getResult());
            
         TxTypeSmartContractDeploy rawTransaction = TxTypeSmartContractDeploy.decodeFromRawTransaction(signedMessage);


    }


}
