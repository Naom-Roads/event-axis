
SUMMARY: 

EventAxis will give users the ability to view a number of events per page by city. They will also be able to view a chart to see where the most events
are happening so that they can get a bird's eye view of which cities have the most activity. 

# MAIN FEATURES


## FEATURE 1: FILTER EVENT BY CITY


Scenario 1: User filters events by city


* Given a user is on the main page
* When user clicks on “Filter” button and types in city
* Then events will be shown by city entered

Scenario 2: When hovering over a suggestion user can click to select city

* Given user has started to type nearest city
* When user hovers and click suggestion
* Then suggestion will popuplate search field

Scenario 3: When user's city is populated field for number of events will appear

* Given user has entered a city
* When user clicks suggestion
* Then field for entering number of events to be shown will appear


## FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS


Scenario 1: An event element is collapsed by default


* Given user has just opened up the main page
* When user views the events
* Then user will see them all collapsed by default


Scenario 2: User can expand an event to see its details


* Given user is viewing the events list
* When user clicks on the “Show Details” button
* Then the module will expand to show details for the event


Scenario 3: User can collapse an event to hide its details


* Given user is viewing uncollapsed module
* When user click ons the “HIde Details” button
* Then the event module will collapse and hide details

## FEATURE 3: SPECIFY NUMBER OF EVENTS


Scenario 1: When user hasn’t specified a number, 32 is the default number.

* Given a user has not specified the number of events to view per page
* When user has not specified a number
* Then default number is 32


Scenario 2: User can change the number of events they want to see


* Given a user is viewing the list of events 
* When a user clicks on the drop-down menu and selects a number of events to view
* Then a the page will show the number of events specified by the user



## Feature 4: ADD AN APP SHORTCUT TO THE HOMESCREEN

Scenario 1: User click's app shortcut

* Given a user has an app shortcut on their device
* When user clicks on shortcut icon
* Then app will open  


## FEATURE 5: USE THE APP WHEN OFFLINE

Scenario 1: Show cached data when there’s no internet connection


* Given the app is offline
* When a user is on the site
* Then the app will show cached data


Scenario 2: Show error when user changes the settings (city, time range)


* Given application is offline
* When user changes the city, time range
* Then show an error that indicates the user cannot make changes while offline.

FEATURE 6: DATA VISUALIZATION

Scenario 1: Show a chart with the number of upcoming events in each city

* Given that there is a chart with upcoming events
* When a user clicks on the chart tab
* Then they can view a chat showing the number of events in each city. 


## User Stories:

● As a user, I would like to be able to filter events by city so that I can see the list of events that
take place in that city.

● As a user, I would like to be able to show/hide event details so that I can see more/less
information about an event.

● As a user, I would like to be able to specify the number of events I want to view in the app so
that I can see more or fewer events in the events list at once.

● As a user, I would like to be able to use the app when offline so that I can see the events I
viewed the last time I was online.

● As a user, I would like to be able to add the app shortcut to my home screen so that I can
open the app faster.

● As a user, I would like to be able to see a chart showing the upcoming events in each city so
that I know what events are organized in which city.

