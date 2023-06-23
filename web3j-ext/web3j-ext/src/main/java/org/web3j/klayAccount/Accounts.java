package org.web3j.klayAccount;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.web3j.crypto.KlayCredentials;

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
        List<KlayCredentials> returnKlayCredentials = new ArrayList<>();
        for (KlayCredentials element : CredentialLists) {
            if (address.equals(element.getAddress())) {
                returnKlayCredentials.add(element);
            }
        }
        return returnKlayCredentials;
    }





}
