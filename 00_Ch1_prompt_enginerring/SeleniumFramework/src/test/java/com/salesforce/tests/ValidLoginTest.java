package com.salesforce.tests;

import com.salesforce.base.BaseTest;
import com.salesforce.constants.FrameworkConstants;
import com.salesforce.pages.LoginPage;
import com.salesforce.utils.ConfigReader;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.Test;

import java.time.Duration;

public class ValidLoginTest extends BaseTest {

    @Test
    public void testValidLoginSubmission() {
        LoginPage loginPage = new LoginPage(getDriver());
        Assert.assertTrue(loginPage.isPageLoaded(), "Login page must be loaded");

        loginPage.clickRememberMe();
        loginPage.doLogin("valid_enterprise_user@salesforce.com", "ValidPass12345#");

        WebDriverWait wait = new WebDriverWait(getDriver(), Duration.ofSeconds(FrameworkConstants.EXPLICIT_WAIT_SECONDS));
        boolean urlNavigated = wait.until(ExpectedConditions.not(
                ExpectedConditions.urlToBe(ConfigReader.get("url"))
        ));

        Assert.assertTrue(urlNavigated, "Browser should submit credentials and transition away from the initial login URL");
    }
}
