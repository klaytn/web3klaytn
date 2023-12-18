let sdk = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
import org.web3j.protocol.klaytn.core.method.response.AdminGetSpamThrottlerCandidateListResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminGetSpamThrottlerCandidateListExample {
    private Web3j w3 = Web3j.build(new HttpService("https://public-en-baobab.klaytn.net"));
    void adminGetSpamThrottlerCandidateListExample() throws IOException {
        AdminGetSpamThrottlerCandidateListResponse response = w3.adminGetSpamThrottlerCandidateList().send();
        response.getResult();
    }
}
