# Udemy Api

This is an api for the udemy frontend(s) written with nestjs using postgreSQL and exposing a REST api.

## Running the thing

- `npm start`: start nest in watch mode in the `development` environment (meaning you need a `development.env` file
  under `config/env`)

## Environments

- Two envs are configured: `production` and `development` (see npm scripts in package.json to see how to run each)

## Setting Up the Database

1.  I chose PostgreSQL for the backend. To set it up, I made a docker file under `backend/postgres-docker-compose.yml` which
    can be ran using the following command:

        ```bash
        docker compose -f postgres-docker-compose.yml up
        ```

2.  After starting the database, you must create a database with a name matching whatever you have in your backend
    `POSTGRES_DB_NAME` env variable. You can do this with the following command (when inside your docker container):
    ```bash
    psql -U example

        # then, when in the postgres shell
        CREATE DATABASE udemy; # or use whatever your db name is
        ```
