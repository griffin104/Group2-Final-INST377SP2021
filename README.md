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
[Developer Manual](#Developer-Manual)

# Developer Manual

## How to install application and all dependencies
1. Clone this repository through Github Desktop or through Terminal.
2. Open repository in VSCode Terminal or Terminal application.
3. type ```npm install``` into terminal window and run.
4. type ```npm run build``` into terminal window to build your code.
6. The application should now be set to use.

## How to run application on a server
1. Open repository in VSCode terminal or Terminal application.
2. Run ```npm start``` for a production build. There should be no errors.
4. Run ```npm run develop``` for a development build. There should be no errors. Note: The back-end does not run on the development build.
5. In a web browser, go to url: ```http://localhost:8000/```.

## To run tests for software
The are no prewritten tests in the source repository, but you can use Cypress to run your own written tests.
1. Open two terminals and make sure you are in the main project directory
2. In the first terminal, run ```npm start```.
3. In the second terminal run ```npm test```.

## Server application APIs
### PlayerBios - API route for background of players
```/player-bios```
* GET - Reads the model /player-bios, finds all the elements and returns the response to the client in JSON format.
* POST - Creates a json object and send the games data to the server in JSON .
* PUT - Update data where the player_id matches. 

    ```/player-bios/:player_id```
* GET - Reads the model /player-bios, finds the element with matching player_id.
* DELETE - Destroys the element of the data with matching player_id.


### PlayerStats - API route for total statistics of players on the team 
```/player-stats```
* GET - Reads the model /player-stats, finds all the elements and returns the response to the client in JSON format.
* POST - Creates a json object and send the player-stats data to the server in JSON.
* PUT - Update data where the player_stats_id matches. 

```/player-stats/:player_stats_id```
* DELETE - Destroys the element of the data with matching player_stats_id.


### Games - API route for games played
```/games```
* GET - Reads the model /games, finds all the elements and returns the response to the client in JSON format.
* POST - Creates a json object and send the games data to the server in JSON format.
* PUT - Update data where the game_id matches. 

```/games/:game_id```
* DELETE - Destroys the element of the data with matching game_id.


### GameStats - API route for stats from the game as a team 
```/game-stats```
* GET - Reads the model /game-stats, finds all the elements and returns the response to the client in JSON format.
* POST - Creates a json object and send the games data to the server in JSON format.
* PUT - Update data where the game_stats_id matches. 

```/game-stats/:game_stats_id```
* GET - Reads the model /game-stats, finds the element with matching gane_stats_id.
* DELETE - Destroys the element of the data with matching game_stats_id.


### PlayerGameStats - API route for the player stats per game on the team
```/players-game-stats```
* GET - Reads the model /PlayerGameStats, finds all the elements and returns the response to the client in JSON format.
* POST - Creates a json object and send the players game statistics data to the server in JSON format.
* PUT - Update data where the player_game_stats_id matches.

```/player-game-stats/:player_game_stats_id```
* DELETE - Destroys the element of the data with matching player_game_stats_id.

```/player-game-stats/players/:player_id```
* GET - Reads the model /PlayerGameStats, finds all the elements with a matching player_id and returns the response to the client in JSON format.

```/player-game-stats/games/:game_id```
* GET - Reads the model /PlayerGameStats, finds all the elements with a matching game_id and returns the response to the client in JSON format.


###  Custom Queries

```/game-info```
* Get - Reads the models /games and /game_stats and returns the joined response to the client in JSON format.

## Known Bugs and Future Development
### Bugs:
- Using the textbox to filter columns with numerical data returns
any element in the column that matches the number no matter the position.
- Only 1 row can be added at a time.
- Many errors may occur when trying to update more than one table at a time. Only make changes to 1 table at a time.



### Future Development: 
* Implement an way to auto-import data submitted to our website that also updates on its own incrementally.
* Implement a mobile user interface to allow for better navigation on mobile devices.
* Implement UMD credential login to allow potential users such as fans to submit stats.