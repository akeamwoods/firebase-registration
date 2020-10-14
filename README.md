# User Management System
## This Project was made in roughly 4.5 hours.
Please use chrome when testing as I didn't have enough time to test/optimise for other browsers. This is also not mobile friendly due to time constraints.

### Demo: https://akeamwoods.github.io/Manage_Users/

### Notes:
This project is far from perfect, however the task itself was rather large given the 4 hour time limit. I didn't have time to add in the ability to add new users, nor did I have time to hook up the search bar to actually filter the results. You can delete accounts from the view profile page, however I didn't have time to add in the edit functionality. A lot of time was spent hooking up the 'fake' authentication. You can register an account and login, however the password will be stored in the redux store as I didn't have an API or database to connect this to, however the registration flow would be similar to that of a real app (in the saga you would simply call the api/hook up the database as opposed to dispatching an action to add the account to the store). 

I do not cache the users (they are blacklisted from redux-persist) so when you delete users and then do a hard refresh, the user count will be back to 50. This is intentional as I don't want someone to delete all the users and then be unable to view the app without deleting their local storage. 

# Wireframes

## Account Registration

<img src="https://i.imgur.com/dJRQZOp.png" />

## User Login

<img src="https://i.imgur.com/Ahf38x6.png" />

## User Management

<img src="https://i.imgur.com/hCS4s91.png" />

## Viewing Profile

<img src="https://i.imgur.com/BQlWQ2v.png" />

## Editing Profile

<img src="https://i.imgur.com/22qcv9Z.png" />
 
## Settings Page

<img src="https://i.imgur.com/5Lxp0Vy.png" />

## Setting Page Date Picker Example

<img src="https://i.imgur.com/nky7BXs.png" />
