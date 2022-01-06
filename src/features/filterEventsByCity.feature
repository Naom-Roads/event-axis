FEATURE 1: FILTER EVENT BY CITY
Scenario 1: User filters events by city

Given a user is on the main page
When user clicks on “Filter” button and types in city
Then events will be shown by city entered
Scenario 2: When hovering over a suggestion user can click to select city

Given user has started to type nearest city
When user hovers and click suggestion
Then suggestion will popuplate search field
Scenario 3: When user's city is populated field for number of events will appear

Given user has entered a city
When user clicks suggestion
Then field for entering number of events to be shown will appear
