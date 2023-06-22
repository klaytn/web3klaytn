/*
 * Modifications copyright 2019 The caver-java Authors
 * Copyright 2016 Conor Svensson
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
 *
 * This file is derived from web3j/core/src/main/java/org/web3j/crypto/Credential.java (2019/06/13).
 * Modified and improved for the caver-java development.
 */

package org.web3j.crypto;

import java.io.IOException;

import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.klaytn.core.method.response.KlayGetAccount;
import org.web3j.protocol.klaytn.core.method.response.KlayGetAccountAccount;
import org.web3j.protocol.klaytn.core.method.response.KlayGetAccountKey;
import org.web3j.utils.Numeric;
import org.web3j.utils.Strings;

public class KlayCredentials {
    private final ECKeyPair ecKeyPair;
    private final String address;

    private KlayCredentials(ECKeyPair ecKeyPair, String address) {
        this.ecKeyPair = ecKeyPair;
        this.address = !Strings.isEmpty(address) ? Numeric.toHexStringWithPrefixZeroPadded(Numeric.toBigInt(address), 40) : "";
    }

    public ECKeyPair getEcKeyPair() {
        return this.ecKeyPair;
    }

    public String getAddress() {
        return address;
    }

    /**
     * Static method for creating KlayCredentials instance
     * Use address extracted from private key
     *
     * @param privateKey private key for transaction signing
     * @return KlayCredentials
     */
    public static KlayCredentials create(String privateKey) {
        ECKeyPair ecKeyPair = ECKeyPair.create(Numeric.toBigInt(privateKey));
        String address = Numeric.prependHexPrefix(Keys.getAddress(ecKeyPair));
        return create(ecKeyPair, address);
    }

    /**
     * Static method for creating KlayCredentials instance
     * Use address extracted from private key
     *
     * @param ecKeyPair ecKeyPair for transaction signing
     * @return KlayCredentials
     */
    public static KlayCredentials create(ECKeyPair ecKeyPair) {
        String address = Numeric.prependHexPrefix(Keys.getAddress(ecKeyPair));
        return create(ecKeyPair, address);
    }

    /**
     * Static method for creating KlayCredentials instance
     *
     * @param privateKey private key for transaction signing
     * @param address address of account
     * @return KlayCredentials
     */
    public static KlayCredentials create(String privateKey, String address) {
        return create(ECKeyPair.create(Numeric.toBigInt(privateKey)), Numeric.prependHexPrefix(address));
    }

    public Credentials convertToCredentials() {
        Credentials Ethcredentials = Credentials.create(this.getEcKeyPair());
        return Ethcredentials;

    }
    
    public boolean isDeCoupled() {
        String address = Numeric.prependHexPrefix(Keys.getAddress(ecKeyPair));
        return !(address.equals(this.address));
    }
    

    public static boolean isDeCoupled(String privKey, String address) {
        ECKeyPair ecKeyPair = ECKeyPair.create(Numeric.toBigInt(privKey));
        return !(address.equals(Numeric.prependHexPrefix(Keys.getAddress(ecKeyPair))));
    }


    /**
     * Static method for creating KlayCredentials instance
     *
     * @param ecKeyPair ecKeyPair for transaction signing
     * @param address address of account
     * @return KlayCredentials
     */
    public static KlayCredentials create(ECKeyPair ecKeyPair, String address) {
        return new KlayCredentials(ecKeyPair, address);
    }

    public static KlayCredentials createWithKlaytnWalletKey(String klaytnWalletKey) {
        klaytnWalletKey = Numeric.cleanHexPrefix(klaytnWalletKey);
        String privateKey = klaytnWalletKey.substring(0, 64);
        String address = klaytnWalletKey.substring(68);
        return create(privateKey, address);
    }

}
