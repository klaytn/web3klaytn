package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminStartWSResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminStartWSExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminStartWSExample() throws IOException {
        String host = "127.0.0.1";
        int port = 8552;
        String cors = "";
        String apis = "klay";

        AdminStartWSResponse response = sdk.admin.startWS(host, port, cors, apis).send();
        response.getResult();
    }
}
