package org.web3j.example;

import java.io.IOException;

import org.web3j.crypto.KlayCredentials;
import org.web3j.klayAccount.AccountStore;
import org.web3j.klayAccount.Accounts;
import org.web3j.protocol.klaytn.Web3j;

/**
 * 
 */
public class AccountStoreExample {

        public AccountStoreExample(Web3j web3j) throws IOException {
                // address
                // 0xe6c26dfdafa63d5baa7749063a44b761c3f505b8
                KlayCredentials cred = KlayCredentials
                                .create("0x508d200557f1d2e26cd296ace3dc9ded5a1077f197a62a152d940bb432bfeb4f");

                // partial credentials for multi-sig
                // threshold : 2
                KlayCredentials cred_multi = KlayCredentials.create(
                                "0x8e34790f597803df3eab473a55f3f1d3e4889830a751b693b79aa0faf8a2fba1",
                                "0x79eeec0990ad9ee4cb4305ecd4fe3358ae3f3c72");

                KlayCredentials cred_keyupdate = KlayCredentials.create(
                                "0x0ed62f9eb2b15f96b9acb4005cde58832a0174009908af068aec8582a7a43d3e",
                                "0x0d84fab826aef693447400cb149279272eeb3390");

                KlayCredentials cred_role = KlayCredentials.create(
                                "0x19d9ee783512c5eda84732d503d91d9ad21f8864c7b7e423c048d7b6a5f462dc",
                                "0xfbc847c8552fe5c084ee546cb85c7c8f5edb0c6c");

                Accounts accounts = new Accounts();
                accounts.add(cred);
                accounts.add(cred_multi);
                accounts.add(cred_keyupdate);
                accounts.add(cred_role);

                AccountStore accStore = new AccountStore();
                accStore.refresh(web3j, accounts);

                System.out.println("result : " + accStore.getAccountInfos());

        }

}
