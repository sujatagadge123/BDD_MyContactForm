Feature: login feature
Scenario Outline: To validate login functionality
Given User is on login page
When User enters "<username>" and "<password>" and click on login button
Then Validate if login is sucessful
Then User logs off

Examples:
|username|password|
|sen1|Asdf@1234|

