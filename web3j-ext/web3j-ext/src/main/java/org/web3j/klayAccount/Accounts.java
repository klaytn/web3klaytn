package org.web3j.klayAccount;

import java.io.IOException;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;

import org.web3j.crypto.ECKeyPair;
import org.web3j.crypto.Keys;
import org.web3j.crypto.KlayCredentials;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.klaytn.core.method.response.KlayGetAccount;
import org.web3j.protocol.klaytn.core.method.response.KlayGetAccountAccount;
import org.web3j.protocol.klaytn.core.method.response.KlayGetAccountKey;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.utils.Numeric;

public class Accounts {
    private final List<KlayCredentials> CredentialLists = new ArrayList<>();

    public Accounts() {
    }

    public boolean add(KlayCredentials credentials) {
        return CredentialLists.add(credentials);
    }

    public boolean add(String privKey) {
        return CredentialLists.add(KlayCredentials.create(privKey));
    }

    public boolean remove(KlayCredentials credentials) {
        return CredentialLists.remove(credentials);
    }

    public List<KlayCredentials> getList() {
        return this.CredentialLists;
    }

    public List<KlayCredentials> credentialsByKey(BigInteger privKey) {
        List<KlayCredentials> returnKlayCredentials = new ArrayList<>();
        for (KlayCredentials element : CredentialLists) {
            if (element.getEcKeyPair().getPrivateKey().equals(privKey)) {
                returnKlayCredentials.add(element);
            }
        }
        return returnKlayCredentials;
    }
    
    public List<KlayCredentials> credentialsByPubKey(BigInteger pubKey) {
        List<KlayCredentials> returnKlayCredentials = new ArrayList<>();
        for (KlayCredentials element : CredentialLists) {
            if (element.getEcKeyPair().getPublicKey().equals(pubKey)) {
                returnKlayCredentials.add(KlayCredentials.create(element.getEcKeyPair(), element.getAddress()));
            }
        }
        return returnKlayCredentials;
    }

    public List<KlayCredentials> credentialsByAddress(String address) {
        List<KlayCredentials> returnKlayCredentials = Collections.<KlayCredentials>emptyList();
        for (KlayCredentials element : CredentialLists) {
            if (element.getAddress() == address) {
                returnKlayCredentials.add(element);
            }
        }
        return returnKlayCredentials;
    }





}
