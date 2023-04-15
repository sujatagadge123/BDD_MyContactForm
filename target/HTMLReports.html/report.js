$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/Features/login.feature");
formatter.feature({
  "name": "login feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate login functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and click on login button",
  "keyword": "When "
});
formatter.step({
  "name": "Validate if login is sucessful",
  "keyword": "Then "
});
formatter.step({
  "name": "User logs off",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "sen1",
        "Asdf@1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate login functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.MyContactForm.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"sen1\" and \"Asdf@1234\" and click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.MyContactForm.user_enters_and_and_click_on_login_button(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate if login is sucessful",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.MyContactForm.validate_if_login_is_sucessful()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs off",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.MyContactForm.user_logs_off()"
});
formatter.result({
  "status": "passed"
});
});