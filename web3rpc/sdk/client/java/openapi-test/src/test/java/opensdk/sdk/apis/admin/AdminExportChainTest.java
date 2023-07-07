package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminExportChainResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.Random;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Admin RPC Test")
public class AdminExportChainTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC admin_exportChain")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String randomFileName = generateRandomFileName();
        String file = "/tmp/" + randomFileName  + ".txt";

        AdminExportChainResponse response = w3.adminExportChain(file).send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
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
