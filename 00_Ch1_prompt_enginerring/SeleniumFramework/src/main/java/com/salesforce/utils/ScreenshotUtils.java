package com.salesforce.utils;

import com.salesforce.driver.DriverFactory;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public final class ScreenshotUtils {

    private ScreenshotUtils() {}

    public static String getBase64Screenshot() {
        WebDriver driver = DriverFactory.getDriver();
        if (driver != null) {
            return ((TakesScreenshot) driver).getScreenshotAs(OutputType.BASE64);
        }
        return "";
    }
}
