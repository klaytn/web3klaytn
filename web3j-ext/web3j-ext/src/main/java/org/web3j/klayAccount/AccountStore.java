package org.web3j.klayAccount;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.json.JSONArray;
import org.json.JSONObject;
import org.web3j.crypto.KlayCredentials;

import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.klaytn.core.method.response.KlayGetAccount;
import org.web3j.protocol.klaytn.core.method.response.KlayGetAccountKey;
import org.web3j.protocol.klaytn.core.method.response.KlayGetAccountResponse;
import org.web3j.protocol.core.DefaultBlockParameterName;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class AccountStore {
    private final HashMap<String, AccountInfo> AccountLists;

    public AccountStore() {
        this.AccountLists = new HashMap<String, AccountInfo>();
    }

    public boolean refresh(Web3j web3j, Accounts list) throws IOException {
        this.AccountLists.clear();

        Set<String> set = new HashSet<String>();

        for (KlayCredentials element : list.getList()) {
            set.add(element.getAddress());
        }

        for (String element : set) {
            KlayGetAccountKey acc = web3j.klayGetAccountKey(element, DefaultBlockParameterName.LATEST).send()
                    .getResult();
            if (acc == null) {
                return false;
            }
            JSONObject jsonAccount = new JSONObject(acc);
            JSONObject jsonKey = AccountInfo.getKeyJSON(jsonAccount, list);
            if (jsonKey != null) {
                AccountInfo accountInfo = new AccountInfo(element, jsonKey);
                this.AccountLists.put(element, accountInfo);
            }

        }

        return true;

    }

    public int getType(String address) {
        AccountInfo accountInfo = this.AccountLists.get(address);
        return accountInfo.getKeyType();
    }

    public JSONObject getAccountInfo(String address) throws JsonProcessingException {
        AccountInfo account = this.AccountLists.get(address);
        return account.getByJSON();
    }

    public JSONArray getAccountInfos() {
        JSONArray jsonArray = new JSONArray();
        for (String key : this.AccountLists.keySet()) {
            jsonArray.put(this.AccountLists.get(key).getByJSON());
        }
        return jsonArray;
    }

    public boolean isInAccountStore(String address) {
        return AccountLists.containsKey(address);

    }

}
