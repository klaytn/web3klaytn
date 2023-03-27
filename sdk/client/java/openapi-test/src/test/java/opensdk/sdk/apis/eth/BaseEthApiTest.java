package opensdk.sdk.apis.eth;

import opensdk.sdk.apis.EthApi;
import opensdk.sdk.apis.util.PropertyUtils;
import org.web3j.protocol.http.HttpService;

/**
 * @author Tungnd
 * @since 27/03/2023 10:32 AM
 */
public abstract class BaseEthApiTest {
    protected final EthApi ethApi;

    // given
    public BaseEthApiTest() {
        this.ethApi = new EthApi(new HttpService(PropertyUtils.getRpcUrl()));
    }
}
