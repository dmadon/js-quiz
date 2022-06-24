# JavaScript Quiz

## Description

This is a timed JavaScript quiz game that records and saves a user's score upon completetion. It stores the 10 most recent scores.

The questions for this quiz came directly from the w3schools JavaScript quiz which can be found at

https://www.w3schools.com/js/js_quiz.asp

## Process

This project was a challenge! To complete it, I broke it down into separate issues:

* Build the index.html page, setting both static html elements and placeholders for dynamically generated elements that would be created in the JavaScript file. 

* Build a second page to store the players' most recent scores.

* Put some basic CSS styling together for a pleasing aesthetic.

* Create JavaScript file and start building the array of quiz questions.

* Create script to handle the flow of game play, moving from one question to the next whenever a player answers a question.

* Create script that checks to see if the answer was correct or incorrect and return a message.

* Create timer functionality that starts a countdown from 90 seconds. The time decreases by 10 seconds every time an incorrect answer is chosen. 

* Create end game functionality to save player's final score when one of two conditions occurs:

    * Player has answered all questions and there is time remaining on the clock. Time remaining gets saved as final score.

    * Player runs out of time before answering all the quesitons. Final score is saved as 0.

* Prompt user to enter initals and save their score to the high scores page, save recent scores in localStorage and load recent scores to the high scores page, prepending the most recent scores to the top of the list.

## Links

View the deployed application: https://dmadon.github.io/js-quiz/

View the repository: https://github.com/dmadon/js-quiz

