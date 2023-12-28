package org.web3j.crypto.transaction.fee;
import org.web3j.crypto.KlayCredentials;
import org.web3j.crypto.KlayRawTransaction;
import org.web3j.crypto.KlaySignatureData;
import org.web3j.utils.BytesUtils;
import org.web3j.crypto.Sign;
import org.web3j.crypto.transaction.type.AbstractTxType;
import org.web3j.crypto.transaction.type.TxTypeFeeDelegate;
import org.web3j.rlp.RlpEncoder;
import org.web3j.rlp.RlpList;
import org.web3j.rlp.RlpString;
import org.web3j.rlp.RlpType;
import org.web3j.utils.Numeric;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
public class FeePayer {

    final static String EMPTY_FEE_PAYER_ADDRESS = "0x";
    final static String ZERO_FEE_PAYER_ADDRESS = "0x0000000000000000000000000000000000000000";
    private KlayCredentials credentials;
    private long chainId;

    public FeePayer(KlayCredentials credentials, long chainId) {
        this.credentials = credentials;
        this.chainId = chainId;
    }

    public KlayRawTransaction sign(TxTypeFeeDelegate txType) {
        Set<KlaySignatureData> feePayerSignatureDataSet = getFeePayerSignatureData(txType);

        List<RlpType> rlpTypeList = new ArrayList<>(txType.rlpValues());
        List<RlpType> senderSignatureList = new ArrayList<>();

        for (KlaySignatureData senderSignature : txType.getSenderSignatureDataSet()) {
            senderSignatureList.add(senderSignature.toRlpList());
        }
        rlpTypeList.add(new RlpList(senderSignatureList));
        rlpTypeList.add(RlpString.create(Numeric.hexStringToByteArray(credentials.getAddress())));

        List<RlpType> feePayerSignatureList = new ArrayList<>();

        String feePayer = txType.getFeePayer();
        if (!feePayer.equals(EMPTY_FEE_PAYER_ADDRESS) && !feePayer.equals(ZERO_FEE_PAYER_ADDRESS)) {
            for (KlaySignatureData feePayerSignatureData : txType.getFeePayerSignatureData()) {
                feePayerSignatureList.add(feePayerSignatureData.toRlpList());
            }
        }

        for (KlaySignatureData feePayerSignatureData : feePayerSignatureDataSet) {
            feePayerSignatureList.add(feePayerSignatureData.toRlpList());
        }
        rlpTypeList.add(new RlpList(feePayerSignatureList));

        byte[] encodedTransaction = RlpEncoder.encode(new RlpList(rlpTypeList));
        byte[] type = {txType.getKlayType().get()};
        byte[] rawTx = BytesUtils.concat(type, encodedTransaction);
        return new KlayRawTransaction(null, rawTx, feePayerSignatureDataSet);
    }

    @Deprecated
    public KlaySignatureData getSignatureData(AbstractTxType txType) {
        KlaySignatureData signatureData = KlaySignatureData.createKlaySignatureDataFromChainId(chainId);
        byte[] encodedTransaction = txType.getEncodedTransactionNoSig();

        List<RlpType> rlpTypeList = new ArrayList<>();
        rlpTypeList.add(RlpString.create(encodedTransaction));
        rlpTypeList.add(RlpString.create(Numeric.hexStringToByteArray(credentials.getAddress())));
        rlpTypeList.addAll(signatureData.toRlpList().getValues());
        byte[] encodedTransaction2 = RlpEncoder.encode(new RlpList(rlpTypeList));

        Sign.SignatureData signedSignatureData = Sign.signMessage(encodedTransaction2, credentials.getEcKeyPair());
        return KlaySignatureData.createEip155KlaySignatureData(signedSignatureData, chainId);
    }

    /**
     * extract signature data of fee payer signed in TxType
     *
     * @param txType txType to extract fee payer's signature data
     * @return Set fee payer's signature data
     */
    private Set<KlaySignatureData> getFeePayerSignatureData(AbstractTxType txType) {
        KlaySignatureData signatureData = KlaySignatureData.createKlaySignatureDataFromChainId(chainId);
        Set<KlaySignatureData> feePayerSignatureDataSet = new HashSet<>();
        byte[] encodedTransactionNoSig = txType.getEncodedTransactionNoSig();

        List<RlpType> rlpTypeList = new ArrayList<>();
        rlpTypeList.add(RlpString.create(encodedTransactionNoSig));
        rlpTypeList.add(RlpString.create(Numeric.hexStringToByteArray(credentials.getAddress())));
        rlpTypeList.addAll(signatureData.toRlpList().getValues());
        byte[] encodedTransaction = RlpEncoder.encode(new RlpList(rlpTypeList));

            Sign.SignatureData signedSignatureData = Sign.signMessage(encodedTransaction, credentials.getEcKeyPair());
            feePayerSignatureDataSet.add(KlaySignatureData.createEip155KlaySignatureData(signedSignatureData, chainId));

        return feePayerSignatureDataSet;
    }
}