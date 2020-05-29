const db = require('../data/db-config');

module.exports = {
    getUsers,
    findByUser,
    addUser
}

function getUsers() {
    return db('*')
        .from('users');
}

function findByUser(user) {

    return db('username')
        .from('users')
        .where('username', user)
        .first()
}

function addUser(values) {
    return db('users').insert(values)
}