var knex = require('./knex.js');

function Todos() {
  return knex('todos');
}

// *** queries *** //

function getAll() {
  return Todos().select();
}

function add(todo) {
  return Todos().insert(todo, 'id');
}


module.exports = {
  getAll: getAll
};
