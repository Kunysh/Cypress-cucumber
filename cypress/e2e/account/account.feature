@regression
Feature: Demoblaze Account Management

  Background:
    Given a user is on the Demoblaze homepage

  Scenario Outline: Unsuccessful registration on Demoblaze
    When the user navigates to the register page
    And the user enters "<username>", "<password>"
    And clicks the register button
    Then the user should see a modal with "<expectedAlertText>"

    Examples:
      | username | password     | expectedAlertText        |
      | testowy  | haslotestowe | This user already exist. |

  Scenario: Successful login to Demoblaze
    When the user navigates to the login page
    And the user enters username and password
    And clicks the login button
    Then the user should be logged in
