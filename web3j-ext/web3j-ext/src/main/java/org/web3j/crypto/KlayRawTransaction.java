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
package org.web3j.crypto;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import org.web3j.crypto.transaction.account.AccountKey;
import org.web3j.crypto.transaction.type.ITransaction;
import org.web3j.crypto.transaction.type.TxType;
import org.web3j.crypto.transaction.type.TxType.Type;
import org.web3j.crypto.transaction.type.TxTypeAccountUpdate;
import org.web3j.crypto.transaction.type.TxTypeCancel;
import org.web3j.crypto.transaction.type.TxTypeChainDataAnchoring;
import org.web3j.crypto.transaction.type.TxTypeFeeDelegatedAccountUpdate;
import org.web3j.crypto.transaction.type.TxTypeFeeDelegatedAccountUpdateWithRatio;
import org.web3j.crypto.transaction.type.TxTypeFeeDelegatedCancel;
import org.web3j.crypto.transaction.type.TxTypeFeeDelegatedCancelWithRatio;
import org.web3j.crypto.transaction.type.TxTypeFeeDelegatedChainDataAnchoring;
import org.web3j.crypto.transaction.type.TxTypeFeeDelegatedChainDataAnchoringWithRatio;
import org.web3j.crypto.transaction.type.TxTypeFeeDelegatedSmartContractDeploy;
import org.web3j.crypto.transaction.type.TxTypeFeeDelegatedSmartContractDeployWithRatio;
import org.web3j.crypto.transaction.type.TxTypeFeeDelegatedSmartContractExecution;
import org.web3j.crypto.transaction.type.TxTypeFeeDelegatedSmartContractExecutionWithRatio;
import org.web3j.crypto.transaction.type.TxTypeFeeDelegatedValueTransfer;
import org.web3j.crypto.transaction.type.TxTypeFeeDelegatedValueTransferMemo;
import org.web3j.crypto.transaction.type.TxTypeFeeDelegatedValueTransferMemoWithRatio;
import org.web3j.crypto.transaction.type.TxTypeFeeDelegatedValueTransferWithRatio;
import org.web3j.crypto.transaction.type.TxTypeSmartContractDeploy;
import org.web3j.crypto.transaction.type.TxTypeSmartContractExecution;
import org.web3j.crypto.transaction.type.TxTypeValueTransfer;
import org.web3j.crypto.transaction.type.TxTypeValueTransferMemo;

/**
 * Transaction class used for signing transactions locally.<br>
 * For the specification, refer to p4 of the
 * <a href="http://gavwood.com/paper.pdf">yellow
 * paper</a>.
 */
public class KlayRawTransaction extends RawTransaction {
    private byte[] value;
    private Set<KlaySignatureData> signatureData;

    public KlayRawTransaction(ITransaction transaction, Set<KlaySignatureData> signatureData) {
        super(transaction);
        this.signatureData = signatureData;
    }

    public KlayRawTransaction(ITransaction transaction, KlaySignatureData signatureData) {
        super(transaction);
        this.signatureData = new HashSet<>(Arrays.asList(signatureData));
    }

    public KlayRawTransaction(ITransaction transaction, byte[] value, Set<KlaySignatureData> signatureData) {
        super(transaction);
        this.value = value;
        this.signatureData = signatureData;
    }

    public KlayRawTransaction(ITransaction transaction, byte[] value, KlaySignatureData signatureData) {
        super(transaction);
        this.value = value;
        this.signatureData = new HashSet<>(Arrays.asList(signatureData));
    }

    public KlaySignatureData getSignatureData() {
        try {
            return signatureData.iterator().next();
        } catch (Exception e) {
            throw new RuntimeException("Called without signature data");
        }
    }

    protected KlayRawTransaction(ITransaction transaction) {
        super(transaction);
    }

    public static KlayRawTransaction createTransaction(
            TxType.Type type,
            BigInteger nonce,
            BigInteger gasPrice,
            BigInteger gas,
            String from,
            AccountKey accountKey) {

        if (type == Type.ACCOUNT_UPDATE) {
            return new KlayRawTransaction(
                    TxTypeAccountUpdate.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            from,
                            accountKey));
        }

        else if (type == Type.FEE_DELEGATED_ACCOUNT_UPDATE) {
            return new KlayRawTransaction(
                    TxTypeFeeDelegatedAccountUpdate.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            from,
                            accountKey));
        }

        else {
            throw new UnsupportedOperationException("Unsupported type transaction");
        }
    }

    public static KlayRawTransaction createTransaction(
            TxType.Type type,
            BigInteger nonce,
            BigInteger gasPrice,
            BigInteger gas,
            String from) {

        if (type == Type.CANCEL) {
            return new KlayRawTransaction(
                    TxTypeCancel.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            from));
        }

        else if (type == Type.FEE_DELEGATED_CANCEL) {
            return new KlayRawTransaction(
                    TxTypeFeeDelegatedCancel.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            from));
        }

        else {
            throw new UnsupportedOperationException("Unsupported type transaction");
        }
    }

    public static KlayRawTransaction createTransaction(
            TxType.Type type,
            BigInteger nonce,
            BigInteger gasPrice,
            BigInteger gas,
            String to,
            BigInteger value,
            String from) {

        if (type == Type.VALUE_TRANSFER) {
            return new KlayRawTransaction(
                    TxTypeValueTransfer.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            to,
                            value,
                            from));
        }

        else if (type == Type.FEE_DELEGATED_VALUE_TRANSFER) {
            return new KlayRawTransaction(
                    TxTypeFeeDelegatedValueTransfer.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            to,
                            value,
                            from));
        } else {
            throw new UnsupportedOperationException("Unsupported type transaction");
        }
    }

    public static KlayRawTransaction createTransaction(
            TxType.Type type,
            BigInteger nonce,
            BigInteger gasPrice,
            BigInteger gas,
            String to,
            BigInteger value,
            String from,
            byte[] payload) {

        if (type == Type.VALUE_TRANSFER_MEMO) {
            return new KlayRawTransaction(
                    TxTypeValueTransferMemo.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            to,
                            value,
                            from,
                            payload));
        }

        else if (type == Type.FEE_DELEGATED_VALUE_TRANSFER_MEMO) {
            return new KlayRawTransaction(
                    TxTypeFeeDelegatedValueTransferMemo.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            to,
                            value,
                            from,
                            payload));
        }

        else if (type == Type.SMART_CONTRACT_EXECUTION) {
            return new KlayRawTransaction(
                    TxTypeSmartContractExecution.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            to,
                            value,
                            from,
                            payload));
        }

        else if (type == Type.FEE_DELEGATED_SMART_CONTRACT_EXECUTION) {
            return new KlayRawTransaction(
                    TxTypeFeeDelegatedSmartContractExecution.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            to,
                            value,
                            from,
                            payload));
        }

        else {
            throw new UnsupportedOperationException("Unsupported type transaction");
        }
    }

    public static KlayRawTransaction createTransaction(
            TxType.Type type,
            BigInteger nonce,
            BigInteger gasPrice,
            BigInteger gas,
            String to,
            BigInteger value,
            String from,
            byte[] payload,
            BigInteger option) {

        if (type == Type.SMART_CONTRACT_DEPLOY) {
            return new KlayRawTransaction(
                    TxTypeSmartContractDeploy.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            value,
                            from,
                            payload,
                            option));
        }

        else if (type == Type.FEE_DELEGATED_SMART_CONTRACT_DEPLOY) {
            return new KlayRawTransaction(
                    TxTypeFeeDelegatedSmartContractDeploy.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            value,
                            from,
                            payload,
                            option));
        }

        else if (type == Type.FEE_DELEGATED_VALUE_TRANSFER_MEMO_WITH_RATIO) {
            return new KlayRawTransaction(
                    TxTypeFeeDelegatedValueTransferMemoWithRatio.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            to,
                            value,
                            from,
                            payload,
                            option));
        }

        else if (type == Type.FEE_DELEGATED_SMART_CONTRACT_EXECUTION_WITH_RATIO) {
            return new KlayRawTransaction(
                    TxTypeFeeDelegatedSmartContractExecutionWithRatio.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            to,
                            value,
                            from,
                            payload,
                            option));
        }

        else {
            throw new UnsupportedOperationException("Unsupported type transaction");
        }

    }

    public static KlayRawTransaction createTransaction(
            TxType.Type type,
            BigInteger nonce,
            BigInteger gasPrice,
            BigInteger gas,
            String from,
            AccountKey accountKey,
            BigInteger feeRatio) {

        if (type == Type.FEE_DELEGATED_ACCOUNT_UPDATE_WITH_RATIO) {
            return new KlayRawTransaction(
                    TxTypeFeeDelegatedAccountUpdateWithRatio.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            from,
                            accountKey,
                            feeRatio));
        }

        else {
            throw new UnsupportedOperationException("Unsupported type transaction");
        }
    }

    public static KlayRawTransaction createTransaction(
            TxType.Type type,
            BigInteger nonce,
            BigInteger gasPrice,
            BigInteger gas,
            String from,
            BigInteger feeRatio) {

        if (type == Type.FEE_DELEGATED_CANCEL_WITH_RATIO) {
            return new KlayRawTransaction(
                    TxTypeFeeDelegatedCancelWithRatio.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            from,
                            feeRatio));
        }

        else {
            throw new UnsupportedOperationException("Unsupported type transaction");
        }
    }

    public static KlayRawTransaction createTransaction(
            TxType.Type type,
            BigInteger nonce,
            BigInteger gasPrice,
            BigInteger gas,
            String to,
            BigInteger value,
            String from,
            BigInteger feeRatio) {

        if (type == Type.FEE_DELEGATED_VALUE_TRANSFER_WITH_RATIO) {
            return new KlayRawTransaction(
                    TxTypeFeeDelegatedValueTransferWithRatio.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            to,
                            value,
                            from,
                            feeRatio));
        } else {
            throw new UnsupportedOperationException("Unsupported type transaction");
        }
    }

    public static KlayRawTransaction createTransaction(
            TxType.Type type,
            BigInteger nonce,
            BigInteger gasPrice,
            BigInteger gas,
            String to,
            BigInteger value,
            String from,
            byte[] payload,
            BigInteger codeFormat,
            BigInteger feeRatio) {

        if (type == Type.FEE_DELEGATED_SMART_CONTRACT_DEPLOY_WITH_RATIO) {
            return new KlayRawTransaction(
                    TxTypeFeeDelegatedSmartContractDeployWithRatio.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            value,
                            from,
                            payload,
                            codeFormat,
                            feeRatio));
        }

        else {
            throw new UnsupportedOperationException("Unsupported type transaction");
        }

    }
    
    public static KlayRawTransaction createTransaction(
            TxType.Type type,
            BigInteger nonce,
            BigInteger gasPrice,
            BigInteger gas,
            String from,
            byte[] payload) {

    	if (type == Type.CHAIN_DATA_ANCHORING) {
            return new KlayRawTransaction(
                    TxTypeChainDataAnchoring.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            from,
                            payload));
        }
    	
    	else if (type == Type.FEE_DELEGATED_CHAIN_DATA_ANCHORING) {
            return new KlayRawTransaction(
                    TxTypeFeeDelegatedChainDataAnchoring.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            from,
                            payload));
        }
    	
        else {
            throw new UnsupportedOperationException("Unsupported type transaction");
        }

    }
    
    public static KlayRawTransaction createTransaction(
            TxType.Type type,
            BigInteger nonce,
            BigInteger gasPrice,
            BigInteger gas,
            String from,
            byte[] payload,
            BigInteger feeRatio) {

    	if (type == Type.FEE_DELEGATED_CHAIN_DATA_ANCHORING_WITH_RATIO) {
            return new KlayRawTransaction(
                    TxTypeFeeDelegatedChainDataAnchoringWithRatio.createTransaction(
                            type,
                            nonce,
                            gasPrice,
                            gas,
                            from,
                            payload,
                            feeRatio));
        }
   
    	
        else {
            throw new UnsupportedOperationException("Unsupported type transaction");
        }

    }
    
    
  

    public byte[] getRaw() {
        return value;
    }

}
