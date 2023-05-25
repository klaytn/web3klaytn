package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminExportChainResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminExportChainExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void adminExportChainExample() throws IOException {
        String file = "/tmp/chain3.txt";
        AdminExportChainResponse response = w3.adminExportChain(file).send();
        response.getResult();
    }
}
