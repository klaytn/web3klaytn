/*
 * Copyright 2019 Web3 Labs Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */
package org.web3j.crypto.transaction.type;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

import org.web3j.crypto.Sign;
import org.web3j.rlp.RlpString;
import org.web3j.rlp.RlpType;
import org.web3j.utils.Bytes;
import org.web3j.utils.Numeric;

import static org.web3j.crypto.transaction.type.KlaytnTransactionType.LEGACY;

/**
 * Transaction class used for signing transactions locally.<br>
 * For the specification, refer to p4 of the <a href="http://gavwood.com/paper.pdf">yellow
 * paper</a>.
 */
public class KlaytnLegacyTransaction implements ITransaction {

    private KlaytnTransactionType type;
    private BigInteger nonce;
    private BigInteger gasPrice;
    private BigInteger gas;
    private String to;
    private BigInteger value;
    private String data;

    public KlaytnLegacyTransaction(
            BigInteger nonce,
            BigInteger gasPrice,
            BigInteger gas,
            String to,
            BigInteger value,
            String data) {
        this(LEGACY, nonce, gasPrice, gas, to, value, data);
    }

    // LegacyTransaction can have only one tx type. Use another constructor.
    @Deprecated
    public KlaytnLegacyTransaction(
            KlaytnTransactionType legacy,
            BigInteger nonce,
            BigInteger gasPrice,
            BigInteger gas,
            String to,
            BigInteger value,
            String data) {
        this.type = legacy;
        this.nonce = nonce;
        this.gasPrice = gasPrice;
        this.gas = gas;
        this.to = to;
        this.value = value;
        this.data = data != null ? Numeric.cleanHexPrefix(data) : null;
    }

    @Override
    public List<RlpType> asRlpValues(Sign.SignatureData signatureData) {
        List<RlpType> result = new ArrayList<>();

        result.add(RlpString.create(getNonce()));

        result.add(RlpString.create(getGasPrice()));
        result.add(RlpString.create(getGas()));

        // an empty to address (contract creation) should not be encoded as a numeric 0 value
        String to = getTo();
        if (to != null && to.length() > 0) {
            // addresses that start with zeros should be encoded with the zeros included, not
            // as numeric values
            result.add(RlpString.create(Numeric.hexStringToByteArray(to)));
        } else {
            result.add(RlpString.create(""));
        }

        result.add(RlpString.create(getValue()));

        // value field will already be hex encoded, so we need to convert into binary first
        byte[] data = Numeric.hexStringToByteArray(getData());
        result.add(RlpString.create(data));

        if (signatureData != null) {
            result.add(RlpString.create(Bytes.trimLeadingZeroes(signatureData.getV())));
            result.add(RlpString.create(Bytes.trimLeadingZeroes(signatureData.getR())));
            result.add(RlpString.create(Bytes.trimLeadingZeroes(signatureData.getS())));
        }

        return result;
    }

    public static KlaytnLegacyTransaction createContractTransaction(
            BigInteger nonce,
            BigInteger gasPrice,
            BigInteger gas,
            BigInteger value,
            String init) {

        return new KlaytnLegacyTransaction(nonce, gasPrice, gas, "", value, init);
    }

    public static KlaytnLegacyTransaction createEtherTransaction(
            BigInteger nonce,
            BigInteger gasPrice,
            BigInteger gas,
            String to,
            BigInteger value) {

        return new KlaytnLegacyTransaction(nonce, gasPrice, gas, to, value, "");
    }

    public static KlaytnLegacyTransaction createTransaction(
            BigInteger nonce, BigInteger gasPrice, BigInteger gas, String to, String data) {
        return createTransaction(nonce, gasPrice, gas, to, BigInteger.ZERO, data);
    }

    public static KlaytnLegacyTransaction createTransaction(
            BigInteger nonce,
            BigInteger gasPrice,
            BigInteger gas,
            String to,
            BigInteger value,
            String data) {

        return new KlaytnLegacyTransaction(nonce, gasPrice, gas, to, value, data);
    }

    @Override
    public BigInteger getNonce() {
        return nonce;
    }

    @Override
    public BigInteger getGasPrice() {
        return gasPrice;
    }
    @Override
    public BigInteger getGasLimit() {
        return gas;
    }

    public BigInteger getGas() {
        return gas;
    }

    @Override
    public String getTo() {
        return to;
    }

    @Override
    public BigInteger getValue() {
        return value;
    }

    @Override
    public String getData() {
        return data;
    }

    @Override
    public TransactionType getType() {
        return TransactionType.EIP1559;
    }

    public KlaytnTransactionType getKlaytnType() {
        return type;
    }
}

