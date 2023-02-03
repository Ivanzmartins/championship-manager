# README

## Introduction
This project is a match and team management system. It allows for user login, listing of teams and matches, adding matches, updating match status, and checking the leaderboard.

## Models
Three models have been created:
- Matches
- Users
- Teams

## Routes

### /login
Logs in the user and returns a valid token if the credentials are correct.
Method: POST

### /login/validate
Returns an object containing the user's role.
Method: GET

### /teams
Returns an array of all teams.
Method: GET

### /teams/:id
Returns data of a specific team.
Method: GET

### /matches
Returns an array of all matches.
Method: GET

### /matches/inProgress=true
Returns matches in progress.
Method: GET

### /matches/inProgress=false
Returns finished matches.
Method: GET

### /matches
Adds a match with inProgress status.
Method: POST

### /matches/:id/finish
Allows for changing the inProgress status of a match to false in the database.
Method: PATCH

### /matches/:id
Allows for updating ongoing matches.
Method: PATCH

### /leaderboard/home
Returns the rankings of home teams.
Method: GET

