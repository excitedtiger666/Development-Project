# Development

### Link to Deployed Website

If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application

The goal of this application is to help all the basketball fanatics step up their fantasy game by being able to filter through players, sort by their scores, and add the players to the dash and see the final score of their team. The value that this application brings is organization and peace of mind to fantasy players when making their team.

### Usability Principles Considered

One specific layout decision that was considered to help improve usability was to put action buttons at the end of the scan pattern. For example, consider the individual player components. The action buttons to add or remove from the dash are positioned meticulously at the bottom right. Additionally, the layout of the page has a distinct hierarchy with the filtering/sorting menu at the top of the screen which indicates the main functionality of the website. Additionally, once you add a player to the dash, the dash container becomes fixed, allowing the user to always be aware of what their dash is looking like where ever they are on the page.

### Organization of Components

I have two components in my app. One is the player component. This component is the squared component on the main page that displays all the players. Since we have many players with the same design and functionality, it made logical sense to make this into a component. Lastly, the dashboard is also its own component. The idea here is, again, that the players -once in the dash- all share the same design and functionality thus it was logical to make this into a component.

### How Data is Passed Down Through Components

The data is passed down through components using props.

### How the User Triggers State Changes

The user triggers state changes in many ways. One way is when the user checks any of the filter options. When doing so, the application stores the user's response into a filter state array. Then the application filters through the player data JSON file, matching players that meet the filter state array's condition. The returned filtered array is then stored in the playerList state variable that is then visually outputted to the user. Additionally, the user triggers state changes by adding and or removing players from the dash into the dash state array. Lastly, sorting/reset will also trigger a state change. When sorting, the playerList state array will get sorted and then updated and when resetting, all the state variables will return to their original state.
