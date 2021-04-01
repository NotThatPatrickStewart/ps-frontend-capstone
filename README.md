# Anorak - Client

## Description
Anorak is an app designed for whiskey drinkers who want to expand their tastes by finding whiskeys with a similar flavor profile to bottles they already konw they like.

## Installations
Run the following commands in the terminal

```
git clone git@github.com:NotThatPatrickStewart/ps-frontend-capstone.git
cd ps-frontend-capstone
npm install
npm start
```
The final command will run the app at localhost:3000.
Follow instructions [here](https://github.com/NotThatPatrickStewart/anorak-server) for running the server at localhost:8000.

## Using the app

### Registering new users
When a new user registers an account, they will be redirected to a page where they can search by whiskeys they know and like. As they enter whiskeys into the search bar, the whiskey they search and the closest match will be returned.

### Selecting whiskeys to try
Once a user has found a whiskey they would like to try, they can select it by clicking the "add to try list" button on that whiskey. This will automatically add that whiskey to that user's spcific "to try" list.

The user can then select *To Try* in the nav bar.

From their To Try list, users can select a whiskey by lcicking on it to see the details for that whiskey, and add notes and a rating for that whiskey once they've tried it by clicking "add note."

### Once you've tried a whiskey
Once you've add tried a whiskey and added a rating, it will automatically be added to your "have tried" list.

From here, users can also select a whiskey to see its details, and can edit the note for that whiskey by clicking "edit note."

### Deleting whiskeys
Whiskeys can be deleted from either list from the detail page for that particular whiskey by clicking "remove whiskey."
