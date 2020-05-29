
exports.up = function (knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments()
        tbl
            .string('username', 25)
            .notNullable()
            .unique()
        tbl
            .string('password', 17)
            .notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};
