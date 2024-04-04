package org.web3j.example.accountKey;

import org.web3j.tx.response.PollingTransactionReceiptProcessor;
import org.web3j.tx.response.TransactionReceiptProcessor;
import org.web3j.example.keySample;
import java.io.IOException;
import java.math.BigInteger;
import java.util.List;

import org.web3j.crypto.KlayCredentials;
import org.web3j.crypto.KlayRawTransaction;
import org.web3j.crypto.KlayTransactionEncoder;
import org.web3j.crypto.transaction.account.AccountKey;
import org.web3j.crypto.transaction.account.AccountKeyPublic;
import org.web3j.crypto.transaction.account.AccountKeyRoleBased;
import org.web3j.crypto.transaction.account.AccountKeyWeightedMultiSig;
import org.web3j.crypto.transaction.account.AccountKeyWeightedMultiSig.WeightedPublicKey;
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

public class AccountUpdateWithRoleBasedExample {

        public static void run(KlayCredentials credentials) throws Exception {

                Web3j web3j = Web3j.build(new HttpService(keySample.BAOBAB_URL));
                KlayCredentials new_credentials1 = KlayCredentials.create(keySample.MULTI_KEY_privkey1);
                KlayCredentials new_credentials2 = KlayCredentials.create(keySample.MULTI_KEY_privkey2);
                KlayCredentials new_credentials3 = KlayCredentials.create(keySample.MULTI_KEY_privkey3);

                BigInteger GAS_PRICE = BigInteger.valueOf(50000000000L);
                BigInteger GAS_LIMIT = BigInteger.valueOf(6721950);
                String from = credentials.getAddress();
                EthChainId EthchainId = web3j.ethChainId().send();
                long chainId = EthchainId.getChainId().longValue();
                BigInteger nonce = web3j.ethGetTransactionCount(from, DefaultBlockParameterName.LATEST).send()
                                .getTransactionCount();

                BigInteger newPubkey1 = new_credentials1.getEcKeyPair().getPublicKey();
                WeightedPublicKey weightedAccountKey1 = WeightedPublicKey.create(BigInteger.ONE,
                                AccountKeyPublic.create(newPubkey1));
                BigInteger newPubkey2 = new_credentials2.getEcKeyPair().getPublicKey();
                WeightedPublicKey weightedAccountKey2 = WeightedPublicKey.create(BigInteger.ONE,
                                AccountKeyPublic.create(newPubkey2));
                BigInteger newPubkey3 = new_credentials3.getEcKeyPair().getPublicKey();
                WeightedPublicKey weightedAccountKey3 = WeightedPublicKey.create(BigInteger.ONE,
                                AccountKeyPublic.create(newPubkey3));

                // make list with weightedAccountKey1, weightedAccountKey2, weightedAccountKey3
                List<WeightedPublicKey> weightedAccountKeyList = List.of(weightedAccountKey1, weightedAccountKey2,
                                weightedAccountKey3);

                AccountKeyWeightedMultiSig accountTransactionkey = AccountKeyWeightedMultiSig.create(BigInteger.TWO,
                                weightedAccountKeyList);
                AccountKeyPublic accountUpdateKey = AccountKeyPublic.create(newPubkey1);
                AccountKeyPublic accountFeePayerKey = AccountKeyPublic.create(newPubkey1);

                List<AccountKey> accountKeys = List.of(accountTransactionkey, accountUpdateKey, accountFeePayerKey);

                AccountKeyRoleBased accountkey = AccountKeyRoleBased.create(accountKeys);

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

                int DEFAULT_POLLING_ATTEMPTS_PER_TX_HASH = 40;
                int DEFAULT_BLOCK_TIME = 1 * 1000;
                long DEFAULT_POLLING_FREQUENCY = DEFAULT_BLOCK_TIME;
                TransactionReceiptProcessor transactionReceiptProcessor = new PollingTransactionReceiptProcessor(web3j,
                                DEFAULT_POLLING_FREQUENCY, DEFAULT_POLLING_ATTEMPTS_PER_TX_HASH);
                org.web3j.protocol.core.methods.response.TransactionReceipt ethReceipt = transactionReceiptProcessor
                                .waitForTransactionReceipt(txHash);
                System.out.println("Receipt from eth_getTransactionReceipt : \n" + ethReceipt);
                TransactionReceipt receipt = web3j.klayGetTransactionReceipt(txHash).send().getResult();
                System.out.println("Receipt from klay_getTransactionReceipt : \n" + receipt);
                web3j.shutdown();

                TxTypeAccountUpdate rawTransaction = TxTypeAccountUpdate.decodeFromRawTransaction(signedMessage);

                System.out.println("TxType : " + rawTransaction.getKlayType());

        }

}
