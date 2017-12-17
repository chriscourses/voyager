const bookshelf = require('../config/bookshelf')

const User = bookshelf.Model.extend({
    tableName: 'users'
})

module.exports = User
