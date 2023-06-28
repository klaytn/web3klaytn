/*
 * Copyright 2022 Web3 Labs Ltd.
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
package org.web3j.service;

import org.web3j.crypto.Credentials;
import org.web3j.crypto.KlayCredentials;
import org.web3j.crypto.KlayRawTransaction;
import org.web3j.crypto.KlayTransactionEncoder;
import org.web3j.crypto.RawTransaction;
import org.web3j.crypto.TransactionEncoder;
import org.web3j.tx.ChainId;

/** Service to base sign transaction. */
public class TxKlaySignServiceImpl{

    private final KlayCredentials credentials;

    public TxKlaySignServiceImpl(KlayCredentials credentials) {
        this.credentials = credentials;
    }

    public TxKlaySignServiceImpl(Credentials credentials) {
        this.credentials = KlayCredentials.create(credentials.getEcKeyPair());
    }

    public byte[] sign(KlayRawTransaction rawTransaction, long chainId) {
        final byte[] signedMessage;

        if (chainId > ChainId.NONE) {
            signedMessage = KlayTransactionEncoder.signMessage(rawTransaction, chainId, credentials);
        } else {
            signedMessage = KlayTransactionEncoder.signMessage(rawTransaction, credentials.convertToCredentials());
        }
        return signedMessage;
    }


    
    public String getAddress() {
        return credentials.getAddress();
    }
}
