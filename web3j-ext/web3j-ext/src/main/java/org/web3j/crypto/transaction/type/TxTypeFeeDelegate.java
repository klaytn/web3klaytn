package org.web3j.crypto.transaction.type;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.web3j.crypto.KlayCredentials;
import org.web3j.crypto.KlayRawTransaction;
import org.web3j.crypto.KlaySignatureData;
import org.web3j.rlp.RlpEncoder;
import org.web3j.rlp.RlpList;
import org.web3j.rlp.RlpString;
import org.web3j.rlp.RlpType;
import org.web3j.utils.BytesUtils;
import org.web3j.utils.Numeric;

public abstract class TxTypeFeeDelegate extends AbstractTxType {
    final static String EMPTY_FEE_PAYER_ADDRESS = "0x30";
    final static int DEFAULT_FEE_RATIO = 100;

    private Set<KlaySignatureData> feePayerSignatureData;
    private String feePayer;

    public TxTypeFeeDelegate(TxType.Type type, BigInteger nonce, BigInteger gasPrice, BigInteger gasLimit,
            String from, String to, BigInteger value) {
        super(type, nonce, gasPrice, gasLimit, from, to, value);
        this.feePayerSignatureData = new HashSet<>();
        this.feePayer = EMPTY_FEE_PAYER_ADDRESS;
    }

    public TxTypeFeeDelegate(long chainId, TxType.Type type, BigInteger nonce, BigInteger gasPrice, BigInteger gasLimit,
        String from, String to, BigInteger value) {
    super(chainId, type, nonce, gasPrice, gasLimit, from, to, value);
    this.feePayerSignatureData = new HashSet<>();
    this.feePayer = EMPTY_FEE_PAYER_ADDRESS;
    }

    public Set<KlaySignatureData> getFeePayerSignatureData() {
        return feePayerSignatureData;
    }

    public String getFeePayer() {
        return this.feePayer;
    }

    public void setFeePayer(String feePayer) {
        this.feePayer = feePayer;
    }

    public BigInteger getFeeRatio() {
        return BigInteger.valueOf(DEFAULT_FEE_RATIO);
    }

    /**
     * add a feePayer signature
     *
     * @param feePayerSignatureData signature data signed by feePayer
     */
    public void addFeePayerSignatureData(KlaySignatureData feePayerSignatureData) {
        this.feePayerSignatureData.add(feePayerSignatureData);
    }

    /**
     * add feePayers signature
     *
     * @param feePayerSignatureData signature data signed by feePayer
     */
    public void addFeePayerSignatureData(Set<KlaySignatureData> feePayerSignatureData) {
        this.feePayerSignatureData.addAll(feePayerSignatureData);
    }

    /**
     * add feePayers signature
     *
     * @param signatureRlpTypeList rlp type list of signatures
     */
    protected void addFeePayerSignatureData(List<RlpType> signatureRlpTypeList) {
        for (RlpType signatureRlpType : signatureRlpTypeList) {
            List<RlpType> vrs = ((RlpList) signatureRlpType).getValues();
            if (vrs.size() < 3)
                continue;
            byte[] v = ((RlpString) vrs.get(0)).getBytes();
            byte[] r = ((RlpString) vrs.get(1)).getBytes();
            byte[] s = ((RlpString) vrs.get(2)).getBytes();
            addFeePayerSignatureData(new KlaySignatureData(v, r, s));
        }
    }

    /**
     * add signature data
     *
     * @param values rlp encoded rawTransaction
     * @param offset where sender's signature data begins
     */
    public void addSignatureData(List<RlpType> values, int offset) {
        if (values.size() > offset) {
            List<RlpType> senderSignatures = ((RlpList) (values.get(offset))).getValues();
            addSenderSignatureData(senderSignatures);
        }

        if (values.size() > offset + 1) {
            String feePayer = ((RlpString) values.get(offset + 1)).asString();
            setFeePayer(feePayer);
        }

        if (values.size() > offset + 2) {
            List<RlpType> feePayerSignatures = ((RlpList) (values.get(offset + 2))).getValues();
            addFeePayerSignatureData(feePayerSignatures);
        }
    }

    /**
     * add signature data
     *
     * @param txType TxType holding a signature
     */
    public void addSignatureData(TxTypeFeeDelegate txType) {
        addSenderSignatureData(txType.getSenderSignatureDataSet());
        addFeePayerSignatureData(txType.getSenderSignatureDataSet());
    }

    /**
     * rlp encoding for transaction hash(TxHash)
     *
     * @param credentials credential info of a signer
     * @param chainId     chain ID
     * @return KlayRawTransaction this contains transaction hash and processed
     *         signature data
     * @throws EmptyNonceException throw exception when nonce is null
     */
    @Override
    public KlayRawTransaction sign(KlayCredentials credentials, long chainId) {
        Set<KlaySignatureData> newSignatureDataSet = getNewSenderSignatureDataSet(credentials, chainId);
        addSenderSignatureData(newSignatureDataSet);

        List<RlpType> rlpTypeList = new ArrayList<>(rlpValues());
        List<RlpType> senderSignatureList = new ArrayList<>();

        for (KlaySignatureData klaySignatureData : getSenderSignatureDataSet()) {
            senderSignatureList.add(klaySignatureData.toRlpList());
        }

        rlpTypeList.add(new RlpList(senderSignatureList));
        rlpTypeList.add(RlpString.create(Numeric.hexStringToByteArray(this.feePayer)));

        List<RlpType> feePayerSignatureList = new ArrayList<>();
        for (KlaySignatureData klaySignatureData : this.feePayerSignatureData) {
            feePayerSignatureList.add(klaySignatureData.toRlpList());
        }
        rlpTypeList.add(new RlpList(feePayerSignatureList));

        byte[] encodedTransaction = RlpEncoder.encode(new RlpList(rlpTypeList));
        byte[] type = { getKlayType().get() };
        byte[] rawTx = BytesUtils.concat(type, encodedTransaction);
        return new KlayRawTransaction(this, rawTx, getSenderSignatureData());
    }
}