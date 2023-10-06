package org.web3j.utils;

import java.util.regex.Pattern;

public class BytesUtils {
    private BytesUtils() {
    }

    public static byte[] concat(byte[] src, byte[] dst) {
        byte[] concatenatedBytes = new byte[src.length + dst.length];
        System.arraycopy(src, 0, concatenatedBytes, 0, src.length);
        System.arraycopy(dst, 0, concatenatedBytes, src.length, dst.length);
        return concatenatedBytes;
    }

    public static boolean isHexStrict(String input) {
        Pattern pattern = Pattern.compile("^(-)?(0x|0X)[0-9A-Fa-f]*$");
        return pattern.matcher(input).matches();
    }
}
