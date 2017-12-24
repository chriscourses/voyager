<p align="center"><img src="http://chriscourses.com/images/cc-voyager.svg"></p>

## About Voyager

Voyager is a Node and SQL based web application framework that provides everything you need to produce robust, scalable, database-driven web apps, including:

- Built-in user authentication (opt-in)
- [Simplistic database migrations (Knex)](http://knexjs.org/)
- [Easy-to-use ORM (Bookshelf)](http://bookshelfjs.org/)
- [Clean, full-featured layout templating (Handlebars)](http://handlebarsjs.com/)
- [Robust front-end build system (Webpack)](https://webpack.js.org/)
- Modern ES6 syntax

Built on top of Express, and modeled after Rails and Laravel, Voyager provides a complete solution to getting up and running with a user-based app as quickly as possible.

## Getting Started

1. Download the [Voyager command line interface (CLI)]((https://github.com/chriscourses/voyager-cli)) with NPM:

        npm install -g voyager-cli

2. Create a new Voyager project, with or without auth:

        voyager new newApp
    or

        voyager new newApp --auth

3. Change directory to `newApp` and start the Voyager server:

        cd newApp
        voyager start

4. Open up a new terminal tab and run webpack:

        webpack

5. Your app should open up automatically at `http://localhost:3001` and you should see the Voyager start up page.


## Quick Docs

#### Knex Migration API
Run Migrations: `$ knex migrate:latest`

Rollback Last Migrations: `$ knex migrate:rollback`


## License

Voyager is an open-source framework running under the [MIT License](https://opensource.org/licenses/MIT).
