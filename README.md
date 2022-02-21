BRIEF
Create a searchable beer database using a public api.
Needs to update page as you enter a letter in the search bar.

FIRST STEPS

I broke down the project based on components:
NavBar
Search Box (need to pass in search term from input box and return matching beers)
Filter List (need to accept value via tick box and return list of matching beers)
Card List - render Card based on search/filter criteria, accept API
Card - HTML for each card
Not Found
Services to hold api request

I knew I'd want to use state to store the API fetch results but didn't want to make a separate fetch request each time the user entered a letter in the search box, so I set the masterBeers to the results of the API.

For searching I needed to take the value of the input box. I needed the page to be responsive based on this so set it to state and set up a useEffect to only filter the beers if the search box contained a value.

ADDITIONAL CHALLENGE
Be able to filter on:

- High Alcohol (ABV > 6%)
- Classic range (brewed before 2010)
- High acidity (ph lower than 4)

For filtering I wanted radio buttons so the user could only enter 1 filter value at a time. After looking at the API documentation I knew there was a pre-determined filter for ABV and acidity, so I set up a separate API request to just pull through these, and passed them into a new state.

TO DO
Create a filter for the High Acidity
Finish styling (add search icon on bar)
Fix media query for screen size
