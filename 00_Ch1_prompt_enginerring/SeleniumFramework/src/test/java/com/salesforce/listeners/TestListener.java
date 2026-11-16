package com.salesforce.listeners;

import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.MediaEntityBuilder;
import com.aventstack.extentreports.Status;
import com.salesforce.reports.ExtentReportManager;
import com.salesforce.reports.ExtentTestManager;
import com.salesforce.utils.ScreenshotUtils;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

public class TestListener implements ITestListener {

    @Override
    public void onStart(ITestContext context) {
        ExtentReportManager.getInstance();
    }

    @Override
    public void onFinish(ITestContext context) {
        ExtentReportManager.flushReports();
    }

    @Override
    public void onTestStart(ITestResult result) {
        ExtentTest test = ExtentReportManager.getInstance().createTest(result.getMethod().getMethodName());
        ExtentTestManager.setTest(test);
        ExtentTestManager.getTest().log(Status.INFO, "Starting test: " + result.getMethod().getMethodName());
    }

    @Override
    public void onTestSuccess(ITestResult result) {
        ExtentTestManager.getTest().log(Status.PASS, "Test passed: " + result.getMethod().getMethodName());
        ExtentTestManager.unload();
    }

    @Override
    public void onTestFailure(ITestResult result) {
        String base64Screenshot = ScreenshotUtils.getBase64Screenshot();
        if (base64Screenshot != null && !base64Screenshot.isEmpty()) {
            ExtentTestManager.getTest().log(
                    Status.FAIL,
                    "Test failed: " + result.getThrowable().getMessage(),
                    MediaEntityBuilder.createScreenCaptureFromBase64String(base64Screenshot).build()
            );
        } else {
            ExtentTestManager.getTest().log(Status.FAIL, "Test failed: " + result.getThrowable().getMessage());
        }
        ExtentTestManager.unload();
    }

    @Override
    public void onTestSkipped(ITestResult result) {
        ExtentTestManager.getTest().log(Status.SKIP, "Test skipped: " + result.getMethod().getMethodName());
        ExtentTestManager.unload();
    }
}
