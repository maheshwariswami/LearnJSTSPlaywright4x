package com.salesforce.utils;

import com.salesforce.exceptions.FrameworkException;

import java.io.InputStream;
import java.util.Properties;

public final class ConfigReader {

    private static final Properties properties = new Properties();

    static {
        try (InputStream is = ConfigReader.class.getClassLoader().getResourceAsStream("config.properties")) {
            if (is == null) {
                throw new FrameworkException("config.properties file not found on classpath");
            }
            properties.load(is);
        } catch (Exception e) {
            throw new FrameworkException("Failed to load config.properties from classpath", e);
        }
    }

    private ConfigReader() {}

    public static String get(String key) {
        String value = properties.getProperty(key);
        if (value == null) {
            throw new FrameworkException("Property key '" + key + "' not found in configuration file.");
        }
        return value.trim();
    }
}

