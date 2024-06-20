import org.web3j.protocol.klaytn.core.method.response.KaiaBlockNumberResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KaiaBlockNumberExample {

    private Web3j w3 = Web3j.build(new HttpService("https://public-en-baobab.klaytn.net"));
    void kaiaBlockNumberExample() throws IOException {
        KaiaBlockNumberResponse br = w3.kaiaBlockNumber().send();
        br.getResult();
    }
}
