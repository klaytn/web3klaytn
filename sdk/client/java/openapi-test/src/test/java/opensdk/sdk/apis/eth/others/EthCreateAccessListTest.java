package opensdk.sdk.apis.eth.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthCreateAccessListResponse;
import opensdk.sdk.models.EthTransactionArgs;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Eth RPC Test")
public class EthCreateAccessListTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC eth_createAccessList")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthTransactionArgs args = new EthTransactionArgs();
        args.setFrom("0x3bc5885c2941c5cda454bdb4a8c88aa7f248e312");
        args.setTo("0x00f5f5f3a25f142fafd0af24a754fafa340f32c7");
        args.setData("0x20965255");
        args.setGasPrice("0x3b9aca00");
        args.setGas("0x3d0900");
        String blockNumberOrHash = "latest";
        EthCreateAccessListResponse response = sdk.eth.createAccessList(args,blockNumberOrHash).send();
        response.getResult();
    }
}
