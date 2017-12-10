exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', function(table) {
            table.increments()
            table.string('username', 20).unique()
            table.string('email', 100).unique()
            table.binary('password', 60)
            table.timestamps()
        })
    ])
}

exports.down = function(knex, Promise) {
    return Promise.all([knex.schema.dropTable('users')])
}
