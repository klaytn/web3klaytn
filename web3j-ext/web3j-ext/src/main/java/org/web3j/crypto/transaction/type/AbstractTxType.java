package org.web3j.crypto.transaction.type;

/*
 * Copyright 2019 The caver-java Authors
 *
 * Licensed under the Apache License, Version 2.0 (the “License”);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an “AS IS” BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import org.web3j.crypto.KlayCredentials;
import org.web3j.crypto.KlaySignatureData;
import org.web3j.crypto.KlayRawTransaction;
import org.web3j.utils.BytesUtils;
import org.web3j.crypto.Sign;
import org.web3j.rlp.RlpEncoder;
import org.web3j.rlp.RlpList;
import org.web3j.rlp.RlpString;
import org.web3j.rlp.RlpType;

import java.math.BigInteger;
import java.util.*;

public abstract class AbstractTxType implements TxType, ITransaction {

    /**
     * A value used to uniquely identify a sender’s transaction.
     * If two transactions with the same nonce are generated by a sender, only one
     * is executed.
     */
    private final BigInteger nonce;

    /**
     * The transaction fee which is used to execute transaction.
     */
    private final BigInteger gasPrice;

    /**
     * The maximum amount of transaction fee the transaction is allowed to use.
     */
    private final BigInteger gasLimit;

    /**
     * The account address that will send the value.
     */
    private final String from;

    /**
     * The account address that will receive the transferred value.
     */
    private final String to;

    /**
     * The amount of value (in tokens) to be transferred.
     */
    private final BigInteger value;

    /**
     * The cryptographic signature generated by the sender to let the receiver
     * obtain the sender's address.
     */
    private Set<KlaySignatureData> senderSignatureDataSet;

    private TxType.Type type;

    private long chainId = 0;

    public AbstractTxType(TxType.Type type, BigInteger nonce, BigInteger gasPrice, BigInteger gasLimit,
            String from, String to, BigInteger value) {
        this.type = type;
        this.nonce = nonce;
        this.gasPrice = gasPrice;
        this.gasLimit = gasLimit;
        this.from = from;
        this.to = to;
        this.value = value;
        this.senderSignatureDataSet = new HashSet<>();
    }

    public AbstractTxType(long chainId, TxType.Type type, BigInteger nonce, BigInteger gasPrice, BigInteger gasLimit,
    String from, String to, BigInteger value) {
        this.chainId = chainId;
        this.type = type;
        this.nonce = nonce;
        this.gasPrice = gasPrice;
        this.gasLimit = gasLimit;
        this.from = from;
        this.to = to;
        this.value = value;
        this.senderSignatureDataSet = new HashSet<>();
    }

    protected void setSenderSignatureData(KlaySignatureData signatureData) {
        addSenderSignatureData(signatureData);
    }

    public KlaySignatureData getSenderSignatureData() {
        Iterator<KlaySignatureData> senderSignatureIterator = senderSignatureDataSet.iterator();
        if (senderSignatureIterator.hasNext()) {
            return senderSignatureIterator.next();
        }
        throw new RuntimeException(
                "The use of `getSenderSignatureData()` is not recommended. Use `getSenderSignatureDataSet()` instead.\n");
    }

    /**
     * add the sender's signature data
     *
     * @param signatureData sender's signature data
     */
    protected void addSenderSignatureData(KlaySignatureData signatureData) {
        senderSignatureDataSet.add(signatureData);
    }

    /**
     * add the sender's signature data
     *
     * @param senderSignatureDataSet sender's signature data set
     */
    public void addSenderSignatureData(Set<KlaySignatureData> senderSignatureDataSet) {
        this.senderSignatureDataSet.addAll(senderSignatureDataSet);
    }

    /**
     * add the sender's signature data
     *
     * @param signatureRlpTypeList rlp encoded sender's signature data
     */
    protected void addSenderSignatureData(List<RlpType> signatureRlpTypeList) {
        for (RlpType signature : signatureRlpTypeList) {
            List<RlpType> vrs = ((RlpList) signature).getValues();
            if (vrs.size() < 3)
                continue;
            byte[] v = ((RlpString) vrs.get(0)).getBytes();
            byte[] r = ((RlpString) vrs.get(1)).getBytes();
            byte[] s = ((RlpString) vrs.get(2)).getBytes();
            addSenderSignatureData(new KlaySignatureData(v, r, s));
        }
    }

    /**
     * add the sender's signature data
     *
     * @param values rlp encoded rawTransaction
     * @param offset where sender's signature data begins
     */
    public void addSignatureData(List<RlpType> values, int offset) {
        if (values.size() > offset) {
            List<RlpType> senderSignatures = ((RlpList) (values.get(offset))).getValues();
            addSenderSignatureData(senderSignatures);
        }
    }

    /**
     * add the sender's signature data
     *
     * @param txType txType from which to extract signature
     */
    public void addSignatureData(AbstractTxType txType) {
        addSenderSignatureData(txType.getSenderSignatureDataSet());
    }

    /**
     * returns the sender's signature data set.
     *
     * @return Set set of sender's signature data
     */
    public Set<KlaySignatureData> getSenderSignatureDataSet() {
        return senderSignatureDataSet;
    }

    /**
     * rlp encoding for signature(SigRLP)
     *
     * @param credentials credential info of a signer
     * @param chainId     chain ID
     * @return Set processed signature data
     */
    public Set<KlaySignatureData> getNewSenderSignatureDataSet(KlayCredentials credentials, long chainId) {
        Set<KlaySignatureData> senderSignatureDataList = new HashSet<>();
        KlaySignatureData signatureData = KlaySignatureData.createKlaySignatureDataFromChainId(chainId);
        byte[] encodedTransaction = getEncodedTransactionNoSig();

        List<RlpType> rlpTypeList = new ArrayList<>();
        rlpTypeList.add(RlpString.create(encodedTransaction));
        rlpTypeList.addAll(signatureData.toRlpList().getValues());
        byte[] encodedTransaction2 = RlpEncoder.encode(new RlpList(rlpTypeList));

        Sign.SignatureData signedSignatureData = Sign.signMessage(encodedTransaction2, credentials.getEcKeyPair());
        senderSignatureDataList.add(KlaySignatureData.createEip155KlaySignatureData(signedSignatureData, chainId));

        return senderSignatureDataList;
    }

    public BigInteger getNonce() {
        return nonce;
    }

    public BigInteger getGasPrice() {
        return gasPrice;
    }

    public BigInteger getGasLimit() {
        return gasLimit;
    }

    public String getFrom() {
        return from;
    }

    public String getTo() {
        return to;
    }

    public BigInteger getValue() {
        return value;
    }

    /**
     * create rlp encoded value for signature component
     *
     * @return byte[] rlp encoded value
     */
    @Override
    public byte[] getEncodedTransactionNoSig() {
        List<RlpType> rlpTypeList = new ArrayList<>();
        rlpTypeList.add(RlpString.create(getKlayType().get()));
        rlpTypeList.addAll(rlpValues());
        return RlpEncoder.encode(new RlpList(rlpTypeList));
    }

    /**
     * create RlpType List which contains nonce, gas price and gas limit.
     * List elements can be different depending on transaction type.
     *
     * @return List RlpType List
     */
    @Override
    public List<RlpType> rlpValues() {
        List<RlpType> values = new ArrayList<>();
        values.add(RlpString.create(getNonce()));
        values.add(RlpString.create(getGasPrice()));
        values.add(RlpString.create(getGasLimit()));
        return values;
    }

    /**
     * rlp encoding for signature(SigRLP)
     *
     * @param credentials credential info of a signer
     * @param chainId     chain ID
     * @return KlaySignatureData processed signature data
     */
    @Override
    public KlaySignatureData getSignatureData(KlayCredentials credentials, int chainId) {
        KlaySignatureData signatureData = KlaySignatureData.createKlaySignatureDataFromChainId(chainId);
        byte[] encodedTransaction = getEncodedTransactionNoSig();

        List<RlpType> rlpTypeList = new ArrayList<>();
        rlpTypeList.add(RlpString.create(encodedTransaction));
        rlpTypeList.addAll(signatureData.toRlpList().getValues());
        byte[] encodedTransaction2 = RlpEncoder.encode(new RlpList(rlpTypeList));

        Sign.SignatureData signedSignatureData = Sign.signMessage(encodedTransaction2, credentials.getEcKeyPair());
        return KlaySignatureData.createEip155KlaySignatureData(signedSignatureData, chainId);
    }

    /**
     * rlp encoding for transaction hash(TxHash)
     *
     * @param credentials credential info of a signer
     * @param chainId     chain ID
     * @return KlayRawTransaction this contains transaction hash and processed
     *         signature data
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

        byte[] encodedTransaction = RlpEncoder.encode(new RlpList(rlpTypeList));
        byte[] type = { getKlayType().get() };
        byte[] rawTx = BytesUtils.concat(type, encodedTransaction);

        return new KlayRawTransaction(this, rawTx, getSenderSignatureData());
    }

    public long getChainId() {
        return chainId;
    }

    public TxType.Type getKlayType() {
        return type;
    }
}
