BRIEF

Create a searchable beer database using a public api.
Needs to update page as you enter a letter in the search bar.
Options for user to filter on the following:

- High Alcohol (ABV > 6%)
- Classic range (brewed before 2010)
- High acidity (ph lower than 4)

APPROACH

I Started by breaking the page into components and made a component tree:

- NavBar
- Search Box (need to pass in search term from input box and return matching beers)
- Filter List (need to accept value via tick box and return list of matching beers)
- Card List - render Card based on search/filter criteria, accept API
- Card - HTML for each card
- Not Found
- Services to hold api request

I knew I'd want to use state to store the API fetch results, then use the results to renders cards for each beer.

For searching I needed to take the value of the input box. I needed the page to be responsive based on this so set it to state and set up a useEffect to only filter the beers if the search box contained a value or if a filter was applied.

After looking at the API documentation I saw there was a pre-determined filter for ABV and acidity, so I set up a separate API request to pull through the results.

I wanted the user to be able to add multiple filters alongside a search term so I decided to do an IF statement to determine what criteria was passed into the API request.

There is no set URL option for the Acidity so this meant I needed to delve into each object returned by the API, map over it and filter to just return those which met the specified criteria.

Once I was happy with the functionality it was time to get testing.

I used Enzyme to test that each component rendered correctly.

IMPROVEMENTS

API - make even more dry, instead do: if (searchTerm) filtereds... += 'beer_name=ddddd"
Rename boolean states to is/has
