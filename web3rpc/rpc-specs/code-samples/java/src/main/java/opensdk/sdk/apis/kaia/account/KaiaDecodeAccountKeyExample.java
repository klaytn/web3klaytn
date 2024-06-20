import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.klaytn.core.method.response.KaiaDecodeAccountKeyResponse;

import java.io.IOException;

public class KaiaDecodeAccountKeyExample {
    private Web3j w3 = Web3j.build(new HttpService("https://public-en-baobab.klaytn.net"));
    void kaiaDecodeAccountKeyExample() throws IOException {
        String accountKey = "0x05f898a302a103e4a01407460c1c03ac0c82fd84f303a699b210c0b054f4aff72ff7dcdf01512db84e04f84b02f848e301a103e4a01407460c1c03ac0c82fd84f303a699b210c0b054f4aff72ff7dcdf01512de301a10336f6355f5b532c3c1606f18fa2be7a16ae200c5159c8031dd25bfa389a4c9c06a302a102c8785266510368d9372badd4c7f4a94b692e82ba74e0b5e26b34558b0f081447";
        KaiaDecodeAccountKeyResponse ar = w3.kaiaDecodeAccountKey(
                        accountKey)
                .send();
        ar.getResult();
    }
}
