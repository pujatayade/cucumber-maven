$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/jbksite.feature");
formatter.feature({
  "line": 1,
  "name": "site",
  "description": "As a user \r\nI want to open a website\r\nso that i can check menu",
  "id": "site",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "check Menu of javabykiran.com",
  "description": "",
  "id": "site;check-menu-of-javabykiran.com",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "open a browser",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#When I open a jbksite"
    }
  ],
  "line": 8,
  "name": "I open a jbksite",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "career menu should appears",
  "keyword": "Then "
});
formatter.match({
  "location": "JbkSiteSteps.open_a_browser()"
});
formatter.result({
  "duration": 645229200,
  "status": "passed"
});
formatter.match({
  "location": "JbkSiteSteps.i_open_a_jbksite()"
});
formatter.result({
  "duration": 31000,
  "status": "passed"
});
formatter.match({
  "location": "JbkSiteSteps.career_menu_should_appears()"
});
formatter.result({
  "duration": 51807200,
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\tThe method assertEquals(String, String) is undefined for the type JbkSiteSteps\n\r\n\tat com.jbk.bdd.steps.JbkSiteSteps.career_menu_should_appears(JbkSiteSteps.java:35)\r\n\tat ✽.Then career menu should appears(cucumber/jbksite.feature:9)\r\n",
  "status": "failed"
});
});