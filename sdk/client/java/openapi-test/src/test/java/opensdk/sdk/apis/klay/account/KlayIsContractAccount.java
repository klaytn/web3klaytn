package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayIsContractAccountResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

public class KlayIsContractAccount {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_isContractAccount")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayIsContractAccountResponse response = sdk.klay.isContractAccount(
                "0xc94770007dda54cF92009BFF0dE90c06F603a09f","latest"
        ).send();
        assertFalse(response.getResult());
    }
}
