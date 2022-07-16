# userPlatform- User Stories:
• As a user I should be able to view a dashboard with your name, a profile picture and a description of yourself. <br>
• As a user I should be able to update the following:<br>
    • Name<br>
    • Description of yourself<br>
    • Profile Picture<br>
• As a user I should be able to save the changes that I made to the above listed items<br>
• As a user, I should be able to view the profiles of anyone that has submitted/created a profile through the app.<br>

## API ROUTES

GET /users -> Returns a list of all users from database <br>
POST /users -> Adds a user to the database with name, description and profile picture <br>
GET /user -> Returns a dashboard that shows self user profiles <br>
PUT /user -> I can edit name, description or profile picture of my profile, and these changes are saved and reflected in DOM <br>


## UI

Upon component render, a request is made to the /users endpoint to get all users from the database. At render the data is rendered in the user cards at the bottom of the page. The data is additionally filterd looking for the name 'Ethan', in the users, to display as the top user card. If the top user card's name is edited away from 'Ethan', nothing will show in that card. If I had the time I would add a more complex and functional search functionality, that would let you select any user 'as yoursef'/ as the top card. 

## Did not get to: 
I ran out of time setting up the DB to receive and store images correctly. The functionality exists and works as follows: user edits profile, and selects a file to upload. A file is recevied from the user, set into state and previewed to the user. This slice of state is then added to the other slices in the form change, and are passed to the API route PUT /user that then is ready to plug into the database. All of the functionality is there (minus some robust error handling), minus the DB support for images. 


## Reflection

Overall I am happy with the application that I have created. If I had more time there is so much more that I would do to it including: finishing the profile picture update feature, adding better error handling, adding tests, adding a serch funcitonality, and maybe even a sign up page. Through the process I realized it had been a WHILE since I created React components, and things moved slowly at first. After referencing old projects and stack overflow, I quickly found myself in a place of ebb and flow. I was coding like a mad man, and next thing you know a few hours had passed! Even though I initially needed a refresher, and took quite too long trying to figure out how to style this application, I had a good time and reassured myself that I am a competent developer. I do not know the most languages, or have the most experience, but I have the desire to learn, grow and create, as well as the ability to perservere through and over obsticles. I appreciate your time and review in reading this file, as well as in taking a look at my project. Can't wait to hear from you!
