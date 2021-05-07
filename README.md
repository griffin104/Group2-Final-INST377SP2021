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
```/games``` - API route for games played and stats from the game as a team 
* GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.
* POST - obtains course name from request body to fetch url. fetch data json from PlanetTerp grades API and returns JSON response. 
* PUT - returns response 'Got a PUT request at /api'.
* Delete - 

```/profapi``` - API route for professor reviews data.
* GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.
* POST - obtains professor name from request body to fetch url. fetch data json from PlanetTerp professors API and returns JSON response. 
* PUT - returns response 'Got a PUT request at /api'.

## Known Bugs and Future Development
### Bugs:
- There may be null values in the course and professor reviews data that may need to be handled. 


### Future Development: 
* Handle null values in course and professor reviews data.
* Adding data for more semesters; Spring 2021.
* Diplaying average GPA in course details by professor.
* Displaying average professor rating in professor reviews search.
* Adding more ways to filter courses.