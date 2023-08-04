package opensdk.sdk.apis.constant;

public class UrlConstants {

    private UrlConstants() {}

    public static final String LOCAL_URL = "http://localhost:8551";

    public static final String SERVER_URL = "https://dev.api.klaytn.sotatek.works";

    public static final String TEST_URL = "https://public-en-baobab.klaytn.net";
//    public static final String PN_RPC = "http://172.16.1.223:8561";
//    public static final String GOVERNANCE_RPC="http://172.16.1.223:8557";

    public static final String BAOBAB_RPC = System.getenv().getOrDefault("BAOBAB_RPC", "https://api.baobab.klaytn.net:8651");

    public static final String RPC = System.getenv().getOrDefault("RPC", "https://dev.api.klaytn.sotatek.works");

    public static final String CN_RPC = System.getenv().getOrDefault("RPC", "https://public-node-api.klaytnapi.com/v1/cypress");
    public static final String GOVERNANCE_RPC = System.getenv().getOrDefault("GOVERNANCE_RPC", "https://dev.api.kcn191.klaytn.sotatek.works");
    public static final String PN_RPC = System.getenv().getOrDefault("PN_RPC", "https://dev.api.kpn.klaytn.sotatek.works");
}
