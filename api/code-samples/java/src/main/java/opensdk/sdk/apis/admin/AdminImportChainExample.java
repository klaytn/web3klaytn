package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminImportChainResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminImportChainExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminImportChainExample() throws IOException {
        String fileName = "/tmp/chain.txt";

        AdminImportChainResponse response = this.sdk.admin.importChain(fileName).send();
        response.getResult();
    }
}
