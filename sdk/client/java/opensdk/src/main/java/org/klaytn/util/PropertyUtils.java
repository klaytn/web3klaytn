package org.klaytn.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * @author Tungnd
 * @since 27/03/2023 10:08 AM
 */
public final class PropertyUtils {

    private static final String RPC_URL = "rpc.url";

    private PropertyUtils() {
    }

    private static String getPropertyByKey(String key) {
        String result = null;
        try (InputStream input = PropertyUtils.class.getClassLoader().getResourceAsStream("application.properties")) {

            Properties prop = new Properties();
            // load a properties file
            prop.load(input);
            result = prop.getProperty(key);
        } catch (IOException io) {
            io.printStackTrace();
        }
        return result;
    }

    public static String getRpcUrl() {
        return getPropertyByKey(RPC_URL);
    }
}
