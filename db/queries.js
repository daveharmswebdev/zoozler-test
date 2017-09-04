var knex = require('./knex.js');

function Todos() {
  return knex('todos');
}

function getAll() {
  return Todos().select();
}

function add(todo) {
  return Todos().insert(todo, 'id');
}

function getSingleTodo(todoId) {
  return Todos().where('id', parseInt(todoId)).first();
}


module.exports = {
  getAll: getAll,
  getSingleTodo: getSingleTodo,
  add: add
};
