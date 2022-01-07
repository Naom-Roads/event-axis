#Feature 2
Feature: Show/Hide an Event's Details

Scenario: An event element is collapsed by default
Given user has just opened up the main page
When user views the events
Then user will see them all collapsed by default

Scenario: User can expand an event to see its details
Given user is viewing the events list
When user clicks on the “Show Details” button
Then the module will expand to show details for the event

Scenario: User can collapse an event to hide its details
Given user is viewing un-collapsed module
When user click ons the “Hide Details” button
Then the event module will collapse and hide details
