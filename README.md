# University of Maryland Basketball Statistics 
## Description 

This project aims to give a customizable experience of viewing and analyzing game and player statistics for the University of Maryland Basketball Team from the seasons 2018-2019 and 2019-2020. Our site contains a page to view all game statistics, a page for individual player statistics, as well as a game schedule. Each page has custom controls so you only have to see the stats you are interested in. Additionally, authorized users of our site can log in and gain access to our edit functions to make changes or add information to the various tables.

## Link to Website 
https://inst377-basketball.herokuapp.com/  

## Target Browsers
Our target browsers for proper viewing and experiencing are on desktop with all major browsers, such as Chrome, Firefox, Safari and Edge. The latest versions of each are all supported. 
1. Compatible with Internet Explorer Version 11 and higher 
2. Compatible with Google Chrome Versions 60 and higher 
3. Compatible with Mozilla Firefox Versions 52 and higher 
4. Compatible with Safari (on MacOs) Versions 10.1 and higher 
5. Compatible with Opera versions 47 and higher 
6. Compatible with all versions of Microsoft Edge (80 and higher)



## Links 
Developer Manual 

# Developer Manual

## How to install application and all dependencies
1. Clone this repository through Github Desktop or through Terminal.
2. Open repository in VSCode Terminal or Terminal application.
3. type ```npm install``` into terminal window and run.
4. type ```gatsby build``` into terminal window and run.
5. type ```gatsby develop``` into terminal window and run.
6. The application should now be set to use.

## How to run application on a server
1. Open repository in VSCode terminal or Terminal application.
2. Run ```npm start```. There should be no errors.
3. In a web browser, go to url: ```http://localhost:8000/```.

## To run tests for software
The are no prewritten tests in the source repository, but you can use Cypress to run your own written tests.
1. Open two terminals and make sure you are in the main project directory
2. In the first terminal, run ```npm start```.
3. In the second terminal run ```npm test```.

## Server application APIs
```/games``` - API route for games played
* GET - Reads the model /games, finds all the element and returns the response to the client in JSON format
* POST - Creates a json object and send the games data to the server in JSON format
* PUT - Update data where the game_id matches. 
* Delete - Destroy elements of the data where the game_id matches the specified parameter 

```/players``` - API route for the players on the team
* GET - 
* POST -
* PUT - 
* Delete - 

```/player-stats``` - API route for statistics of players on the team 
* GET - 
* POST -
* PUT - 
* Delete - 


```/player-bios``` - API route for background of players
* GET - 
* POST -
* PUT - 
* Delete - 



```/game-stats``` - API route for stats from the game as a team 
* GET - 
* POST -
* PUT - 
* Delete - 

## Known Bugs and Future Development
### Bugs:
- Using the textbox to filter columns with numerical data returns
any element in the column that matches the number no matter the position



### Future Development: 
* Auto-import data submitted to our website and updates on its own incrementally
* Implement a mobile user interface to allow for better navigation on mobile devices  
* UMD Credential login to allow potential users such as fans to submit stats
* 