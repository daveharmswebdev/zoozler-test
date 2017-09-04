exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', function(table){
    table.increments();
    table.string('todo').notNullable();
    table.string('when').notNullable();
    table.string('where').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos');
};
