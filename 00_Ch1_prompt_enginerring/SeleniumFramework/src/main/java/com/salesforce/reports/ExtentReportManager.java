package com.salesforce.reports;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;

import java.io.File;

public final class ExtentReportManager {

    private static ExtentReports extent;
    private static final String REPORT_PATH = "target/extent-reports/ExtentReport.html";

    private ExtentReportManager() {}

    public static synchronized ExtentReports getInstance() {
        if (extent == null) {
            new File("target/extent-reports").mkdirs();
            ExtentSparkReporter sparkReporter = new ExtentSparkReporter(REPORT_PATH);
            sparkReporter.config().setReportName("Salesforce CRM Test Automation Report");
            sparkReporter.config().setDocumentTitle("Test Execution Summary");
            sparkReporter.config().setTheme(Theme.STANDARD);

            extent = new ExtentReports();
            extent.attachReporter(sparkReporter);
            extent.setSystemInfo("Application", "Salesforce");
            extent.setSystemInfo("Environment", "QA");
            extent.setSystemInfo("JDK", System.getProperty("java.version"));
            extent.setSystemInfo("OS", System.getProperty("os.name"));
        }
        return extent;
    }

    public static synchronized void flushReports() {
        if (extent != null) {
            extent.flush();
        }
    }
}
