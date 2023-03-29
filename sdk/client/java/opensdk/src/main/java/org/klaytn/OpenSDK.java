package org.klaytn;

import opensdk.sdk.apis.EthApi;
import opensdk.sdk.apis.KlayApi;
import org.klaytn.util.PropertyUtils;
import org.web3j.protocol.http.HttpService;

/**
 * @author Tungnd
 * @since 28/03/2023 3:20 PM
 */
public class OpenSDK {

    public EthApi eth;
    public KlayApi klay;

    public OpenSDK() {
        eth = new EthApi(new HttpService(PropertyUtils.getRpcUrl()));
        klay = new KlayApi((new HttpService(PropertyUtils.getRpcUrl())));
    }
}
