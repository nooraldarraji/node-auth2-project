
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'noor', password: 'a7s6d4a76s7ds' },
        { username: 'notreally', password: 'a7s6d4a76s7ds' },
        { username: 'dude', password: 'a7s6d4a76s7ds' }
      ]);
    });
};
