package opensdk.sdk.apis.klay;

import opensdk.sdk.apis.KlayApi;
import opensdk.sdk.apis.util.PropertyUtils;
import org.web3j.protocol.http.HttpService;

/**
 * @author Tungnd
 * @since 27/03/2023 10:32 AM
 */
public abstract class BaseKlayApiTest {
    protected final KlayApi klayApi;

    public BaseKlayApiTest() {
        this.klayApi = new KlayApi(new HttpService(PropertyUtils.getRpcUrl()));
    }
}
