package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminExportChainResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminExportChainExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminExportChainExample() throws IOException {
        String file = "/tmp/chain3.txt";
        AdminExportChainResponse response = sdk.admin.exportChain(file).send();
        response.getResult();
    }
}
