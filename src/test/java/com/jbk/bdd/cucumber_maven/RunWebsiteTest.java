package com.jbk.bdd.cucumber_maven;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

// html // json //xml
@RunWith(Cucumber.class)
@CucumberOptions(features = { "classpath:cucumber/jbksite.feature" }// ,
// tags={"~@SmokeTest"}
)
public class RunWebsiteTest {

}

/**
 * format = { "pretty", "json:target/cucumber-reports/Cucumber.json",
 * "junit:target/cucumber-reports/Cucumber.xml",
 * "html:target/cucumber-reports"},
 */
