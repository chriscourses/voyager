const config = require('../knexfile')
const knex = require('knex')(config)
const bookshelf = require('bookshelf')(knex)

knex.migrate.latest()

module.exports = bookshelf
