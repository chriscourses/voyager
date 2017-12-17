## About Voyager

Voyager is a Node and SQL based web application framework that provides everything you need to produce robust, scalable, database-driven web apps, including:

- Built-in User Authentication (opt-in)
- Database Migrations with [Knex](http://knexjs.org/)
- Easy-to-use ORM with [Bookshelf](http://bookshelfjs.org/)
- Clean, simplistic layout templating with [handlebars](http://handlebarsjs.com/)
- Modern ES6 Syntax
- Robust [webpack](https://webpack.js.org/) front-end build system with:
    - Module bundling
    - SCSS compilation
    - Front-end ES6 compilation with [Babel](https://babeljs.io/)
    - Font and image loading
    - Live reloading and mobile testing with [Browsersync](https://www.browsersync.io/)
    - Code chunking with the [CommonsChunkPlugin](https://webpack.js.org/plugins/commons-chunk-plugin/)
    - Production builds with:
        - CSS and JS Minification
        - CSS Purification

Built on top of Express, and modeled after Rails and Laravel, Voyager provides the option to scaffold common app features such as user authentication, setting you up with a strong, secure foundation for your next user-based app.

## Quick Docs

#### Knex Migration API
Run Migrations: `knex migrate:latest`

Rollback Last Migrations: `knex migrate:rollback`


## License

Voyager is an open-source framework running under the [MIT License](https://opensource.org/licenses/MIT).
