React-dishpoll
project done using reactjs.

How to run the code:
1.Open the react-dishpoll folder

2.Download dependencies by running npm install. Cross check if the dependencies have been added in nodemodules folder.
3.Next in terminal run
cd ~/react-dishpoll
npm start

4.open http://localhost:3000 on the browser to view the website


Problem Statement
Make a small react app for ranking dishes. Multiple users should be able to login into the app and vote for their favourite dishes and see the results of the poll.

Screens and functionalities needed:

Login Screen: A user should be able to login into the app using a username and password. Since there is no backend to query you can use a static list of users. Refer to users.json for the static list of users to use

Once logged in the main app should have 2 tabs (or equivalent).

Tab 1: Fetch the list of dishes using an API and display the results for the user to vote. Each user then should be able to make a selection of 3 dishes from the poll that has been created. Each selection is given points based on the rank (Rank 1 gets 30 points, Rank 2 gets 20, Rank 3 gets 10). Save the user’s selections for displaying it to him on the next screen for poll results. A user should be able to edit his choices anytime even after submission i.e. if Dish 1 was Rank 1, the user can change it to no Rank or Rank 2, if there is another dish with the same rank the other dish will lose its rank

URL to fetch dishes json: https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json

Sample dish object
{
    "id": 1,
    "dishName": "Lasagne",
    "description": "Breaded fried chicken with waffles, and a side of maple syrup.",
    "image": "https://loremflickr.com/300/300/food"
}
Tab2: Show the dishes in the descending order of the points received from the polling. The logged in user should also be able to see his selections in this list so that he knows where his selected dishes stand in the rankings.

How will the submission be evaluated?
Functionality: Is the web-app functional and performant?
Code Quality: Code Readability and structuring.
Exception Handling: No crashes and proper error messages logged.
Git Commit practices: Manage your code in github and make frequent commits.
Submission
Share the github repository and hosted webapp link with a readme on how to run the code. If you have any other doubts, get in touch with us

users =
 [{
      "id": 1,
      "username": "amar",
      "password": "amar123"
    },
    {
      "id": 2,
      "username": "akbar",
      "password": "akbar123"
    },
    {
      "id": 3,
      "username": "antony",
      "password": "antony123"
    },
    {
      "id": 4,
      "username": "john",
      "password": "john123"
    },
    {
      "id": 5,
      "username": "paul",
      "password": "paul123"
    },
    {
      "id":6 ,
      "username": "shashi",
      "password": "shashi123"
    },
    {
      "id":7 ,
      "username": "baki",
      "password": "baki123"
    },
    {
      "id":8 ,
      "username": "vegeta",
      "password": "vegeta123"
    }]