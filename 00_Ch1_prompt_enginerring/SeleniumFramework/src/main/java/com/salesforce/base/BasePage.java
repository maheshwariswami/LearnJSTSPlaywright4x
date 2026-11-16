package com.salesforce.base;

import com.salesforce.constants.FrameworkConstants;
import com.salesforce.exceptions.FrameworkException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public abstract class BasePage {

    protected WebDriver driver;
    protected WebDriverWait wait;

    public BasePage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(FrameworkConstants.EXPLICIT_WAIT_SECONDS));
    }

    protected void waitForVisibility(WebElement element) {
        try {
            wait.until(ExpectedConditions.visibilityOf(element));
        } catch (Exception e) {
            throw new FrameworkException("Element was not visible within timeout: " + element, e);
        }
    }

    protected void waitForClickable(WebElement element) {
        try {
            wait.until(ExpectedConditions.elementToBeClickable(element));
        } catch (Exception e) {
            throw new FrameworkException("Element was not clickable within timeout: " + element, e);
        }
    }

    protected void click(WebElement element) {
        try {
            waitForClickable(element);
            element.click();
        } catch (Exception e) {
            throw new FrameworkException("Failed to click element: " + element, e);
        }
    }

    protected void sendKeys(WebElement element, String text) {
        try {
            waitForVisibility(element);
            element.clear();
            element.sendKeys(text);
        } catch (Exception e) {
            throw new FrameworkException("Failed to send keys to element: " + element, e);
        }
    }

    protected String getText(WebElement element) {
        try {
            waitForVisibility(element);
            return element.getText();
        } catch (Exception e) {
            throw new FrameworkException("Failed to get text from element: " + element, e);
        }
    }
}
