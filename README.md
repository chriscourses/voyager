<p align="center"><img src="http://chriscourses.com/images/cc-voyager.svg"></p>

## About Voyager

Voyager is a Node and SQL based web application framework that provides everything you need to produce robust, scalable, database-driven web apps, including:

* Built-in user authentication (opt-in)
* [Simplistic database migrations (Knex)](http://knexjs.org/)
* [Easy-to-use ORM (Sequelize)](http://docs.sequelizejs.com/)
* [Clean, full-featured layout templating (Handlebars)](http://handlebarsjs.com/)
* [Robust front-end build system (Webpack)](https://webpack.js.org/)
* Modern ES6 syntax

Built on top of Express, and modeled after Rails and Laravel, Voyager provides a complete solution to getting up and running with a user-based app as quickly as possible.

## Getting Started

1. Download the [Voyager command line interface (CLI)](<(https://github.com/chriscourses/voyager-cli)>) with NPM:

        npm install -g voyager-cli

2. Create a new Voyager project, with or without auth:

        voyager new newApp

    or

        voyager new newApp --auth

   _Notice: You must run the built-in Knex migrations and add a .env file with valid credentials for the auth version to work. Further auth related instructions can be found under **Auth Setup** below._

3. Change directory to `newApp` and start the Voyager server:

        cd newApp
        voyager start

4. Open up a new terminal tab and run webpack (requires webpack installed globally):

        webpack

5. Your app should open up automatically at `http://localhost:3001` and you should see the Voyager start up page.

## Auth Setup

To get started with Voyager's built-in authentication, you must follow a few steps required to connect your app to a database and utilize key functionalities such as email confirmations and password resets.

1. Create a file called `.env` in the root of your newly generated Voyager project
2. Copy the contents of `.env.example` and paste inside of the newly created `.env` file:

        DB_HOST=
        DB_USER=
        DB_PASSWORD=
        DB_NAME=

        MAILGUN_KEY=
        MAILGUN_DOMAIN=

3. Create a MySQL database for your app, grab a [Mailgun API key](https://www.mailgun.com/), and insert the corresponding values into the `.env` file. A finished version will look something like this for a local server:

        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=root
        DB_NAME=newApp

        MAILGUN_KEY=key-kfvud83k3kf3vbn22k223222
        MAILGUN_DOMAIN=mailgun.yourdomain.com

5. Install knex if you haven't already:
        
        npm install knex --save
6. Run knex migrations:

        knex migrate:latest

5. Restart the Voyager server:

        voyager start

6. Open a new tab in terminal and start webpack:

        webpack
    
You should now have a fully functioning app with auth features such as user registration, user login, email confirmation, and password reset functionality. For more information and instruction regarding Voyager auth, check the [Chris Courses YouTube channel](https://www.youtube.com/c/chriscourses) for Voyager tutorials and more.

## Quick Docs

#### Knex Migration API

Run Migrations: `knex migrate:latest`

Rollback Last Migrations: `knex migrate:rollback`

## License

Voyager is an open-source framework licensed under the [MIT License](https://opensource.org/licenses/MIT).
