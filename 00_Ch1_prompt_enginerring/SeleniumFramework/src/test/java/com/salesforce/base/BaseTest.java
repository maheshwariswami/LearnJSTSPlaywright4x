package com.salesforce.base;

import com.salesforce.driver.DriverFactory;
import com.salesforce.utils.ConfigReader;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

public abstract class BaseTest {

    @BeforeMethod
    public void setUp() {
        DriverFactory.initDriver();
        getDriver().get(ConfigReader.get("url"));
    }

    public WebDriver getDriver() {
        return DriverFactory.getDriver();
    }

    @AfterMethod(alwaysRun = true)
    public void tearDown() {
        DriverFactory.quitDriver();
    }
}
