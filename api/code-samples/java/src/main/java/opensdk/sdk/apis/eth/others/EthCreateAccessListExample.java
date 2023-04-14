package opensdk.sdk.apis.eth.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthCreateAccessListResponse;
import opensdk.sdk.models.EthTransactionArgs;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthCreateAccessListExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void ethCreateAccessListExample() throws IOException {
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
