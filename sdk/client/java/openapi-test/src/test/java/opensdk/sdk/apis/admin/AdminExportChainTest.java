package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminExportChainResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.util.Random;

@DisplayName("Admin RPC Test")
public class AdminExportChainTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC admin_exportChain")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String randomFileName = generateRandomFileName();

        String file = "/tmp/" + randomFileName  + ".txt";
        AdminExportChainResponse response = sdk.admin.exportChain(file).send();
        response.getResult();
    }

    private static String generateRandomFileName() {
        String chars = "abcdefghijklmnopqrstuvwxyz";
        StringBuilder sb = new StringBuilder();
        Random random = new Random();

        int length = random.nextInt(5) + 6;
        for (int i = 0; i < length; i++) {
            int index = random.nextInt(chars.length());
            sb.append(chars.charAt(index));
        }

        return sb.toString();
    }
}
