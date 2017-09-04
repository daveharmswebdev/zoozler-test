exports.seed = function(knex, Promise) {
  return knex('todos').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('todos').insert({
        todo: 'buy beer',
        when: 'today',
        where: 'kroger'
      });
    }).then(function () {
      return knex('todos').insert({
        todo: 'feed cat',
        when: 'home',
        where: 'afternoon'
      });
    }).then(function () {
      return knex('todos').insert({
        todo: 'pick up wife',
        when: 'airport',
        where: 'tomorrow'
      });
    }).then(function () {
      return knex('todos').insert({
        todo: 'fold laundry',
        when: 'home',
        where: 'before pick up wife'
      });
    });
};
