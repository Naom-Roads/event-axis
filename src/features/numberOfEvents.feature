# Feature 3

Feature: Specify Number of Events

  Scenario: When user hasn’t specified a number, 20 is the default number.
    Given a user has opened the app
    When user has not specified a number
    Then default number is 20

  Scenario: User can change the number of events they want to see
    Given a user is viewing the list of events
    When a user clicks on the drop-down menu and selects a number of events to view
    Then a the page will show the number of events specified by the user
