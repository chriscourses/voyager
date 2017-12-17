<p align="center"><img src="http://chriscourses.com/images/cc-voyager.svg"></p>

## About Voyager

Voyager is a Node and SQL based web application framework that provides everything you need to produce robust, scalable, database-driven web apps, including:

- Built-in user authentication (opt-in)
- [Simplistic database migrations (Knex)](http://knexjs.org/)
- [Easy-to-use ORM (Bookshelf)](http://bookshelfjs.org/)
- [Clean, full-featured layout templating (Handlebars)](http://handlebarsjs.com/)
- [Robust front-end build system (Webpack)](https://webpack.js.org/)
- Modern ES6 syntax

Built on top of Express, and modeled after Rails and Laravel, Voyager provides the option to scaffold common app features such as user authentication, setting you up with a strong, secure foundation for your next user-based app.

## Getting Started

1. Install Voyager by cloning the repo:

        git clone https://github.com/christopher4lis/voyager.git myapp

2. Install project dependencies using NPM or Yarn:

        npm install
    or

        yarn

3. Change directory to `myapp` and start the web server:

        cd myapp
        nodemon

4. Open up a new terminal tab and run webpack:

        webpack

5. Your app should open up automatically at `http://localhost:3001` and you should see the Voyager start up page.


## Quick Docs

#### Knex Migration API
Run Migrations: `$ knex migrate:latest`

Rollback Last Migrations: `$ knex migrate:rollback`


## License

Voyager is an open-source framework running under the [MIT License](https://opensource.org/licenses/MIT).
