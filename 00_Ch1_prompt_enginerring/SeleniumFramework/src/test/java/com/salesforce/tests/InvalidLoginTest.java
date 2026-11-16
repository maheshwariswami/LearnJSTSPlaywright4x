package com.salesforce.tests;

import com.salesforce.base.BaseTest;
import com.salesforce.pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.Test;

public class InvalidLoginTest extends BaseTest {

    @Test
    public void testInvalidLoginDisplaysError() {
        LoginPage loginPage = new LoginPage(getDriver());
        Assert.assertTrue(loginPage.isPageLoaded(), "Login page must be loaded");

        loginPage.doLogin("invalid_user@enterprise-corp.com", "InvalidPassword987");

        Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error banner must appear for invalid credentials");

        String actualError = loginPage.getErrorMessageText();
        Assert.assertTrue(
                actualError.contains("check your username and password"),
                "Expected error message indicating incorrect username/password, got: " + actualError
        );
    }
}
