package com.salesforce.pages;

import com.salesforce.base.BasePage;
import com.salesforce.exceptions.FrameworkException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends BasePage {

    @FindBy(xpath = "//input[@id='username']")
    private WebElement username;

    @FindBy(xpath = "//input[@id='password']")
    private WebElement password;

    @FindBy(xpath = "//input[@id='Login']")
    private WebElement loginButton;

    @FindBy(xpath = "//input[@id='rememberUn']")
    private WebElement rememberMeCheckbox;

    @FindBy(xpath = "//div[@id='error']")
    private WebElement errorMessage;

    public LoginPage(WebDriver driver) {
        super(driver);
        PageFactory.initElements(driver, this);
    }

    public void enterUsername(String user) {
        try {
            sendKeys(username, user);
        } catch (Exception ex) {
            throw new FrameworkException("Failed to enter username: " + ex.getMessage(), ex);
        }
    }

    public void enterPassword(String pass) {
        try {
            if (pass != null && !pass.isEmpty()) {
                sendKeys(password, pass);
            }
        } catch (Exception ex) {
            throw new FrameworkException("Failed to enter password: " + ex.getMessage(), ex);
        }
    }

    public void clickLogin() {
        try {
            click(loginButton);
        } catch (Exception ex) {
            throw new FrameworkException("Failed to click login button: " + ex.getMessage(), ex);
        }
    }

    public void clickRememberMe() {
        try {
            waitForClickable(rememberMeCheckbox);
            if (!rememberMeCheckbox.isSelected()) {
                rememberMeCheckbox.click();
            }
        } catch (Exception ex) {
            throw new FrameworkException("Failed to toggle remember me checkbox: " + ex.getMessage(), ex);
        }
    }

    public void doLogin(String user, String pass) {
        enterUsername(user);
        enterPassword(pass);
        clickLogin();
    }

    public String getErrorMessageText() {
        try {
            return getText(errorMessage);
        } catch (Exception ex) {
            throw new FrameworkException("Failed to retrieve error message: " + ex.getMessage(), ex);
        }
    }

    public boolean isErrorMessageDisplayed() {
        try {
            waitForVisibility(errorMessage);
            return errorMessage.isDisplayed();
        } catch (Exception ex) {
            return false;
        }
    }

    public boolean isPageLoaded() {
        try {
            waitForVisibility(username);
            waitForClickable(loginButton);
            return true;
        } catch (Exception ex) {
            return false;
        }
    }
}
