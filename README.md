# Movie Review System

## Instructions on running the application

1. Clone this repo into your local system

2. Download and unzip the data folder from this **[link](https://drive.google.com/file/d/1tmfVnxOm_AQxA08FlebtG2nQBtxgSpKa/view?usp=sharing)** and put this data folder in the local repo.

3. Ensure that you have installed Docker (version 19.03.13) and docker-compose (version 1.28.6) in your system.

4. Access the local repo via Terminal and run the command `docker-compose up --build` and wait for it to build.

5. Frontend can be accessed at `http://localhost:3000/`.

6. Server is hosted at localhost at port `3001`.

7. MongoDb is hosted at port `4001` and the name of database is `MovieReview`. MongoURL is `mongodb://db:27017/MovieReview`.

## Data Model / Schema

- Users - this can be found in file `users.entity.js`
- Movies - this can be found in file `movies.entity.js`
- Ratings - this can be found in file `movies.entity.js` as it is a subdocument of movies.
