package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminImportChainResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminImportChainExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void adminImportChainExample() throws IOException {
        String fileName = "/tmp/chain.txt";

        AdminImportChainResponse response = w3.adminImportChain(fileName).send();
        response.getResult();
    }
}
