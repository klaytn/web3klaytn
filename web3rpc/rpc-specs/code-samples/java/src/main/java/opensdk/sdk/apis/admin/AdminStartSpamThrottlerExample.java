let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
import org.web3j.protocol.klaytn.core.method.response.AdminStartSpamThrottlerResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminStartSpamThrottlerExample {
    private Web3j w3 = Web3j.build(new HttpService("https://public-en-baobab.klaytn.net"));
    void adminStartSpamThrottlerExample() throws IOException {
        AdminStartSpamThrottlerResponse response = w3.adminStartSpamThrottler().send();
        response.getResult();
    }
}
