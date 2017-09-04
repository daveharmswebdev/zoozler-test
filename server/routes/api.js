const express = require('express');
const router = express.Router();
const queries = require('../../db/queries');

const todos = [
  { todo: 'buy beer', when: 'today', where: 'kroger' },
  { todo: 'feed cat', when: 'today', where: 'home' },
  { todo: 'pick up mom', when: 'tomorrow', where: 'airport' },
];

router.get('/todos', (req, res, next) => {
  // res.json(todos);

  queries.getAll()
  .then(function(todos) {
    res.status(200).json(todos);
  })
  .catch(function(error) {
    next(error);
  })
});

router.get('/todos/:id', function(req, res, next) {
  queries.getSingleTodo(req.params.id)
  .then(function(todo) {
    res.status(200).json(todo);
  })
  .catch(function(error) {
    next(error);
  })
})

router.post('/todos', (req, res) => {
  // console.log(req.body);
  // const todo = req.body;
  // todos.push(todo);
  // console.log(todos);
  // res.send({"message":"success"});

  queries.add(req.body)
  .then(function(todoID) {
    console.log('yeah');
    return queries.getSingleTodo(todoID);
  })
  .then(function(todo) {
    res.status(200).json(todo);
  })
  .catch(function(error) {
    next(error);
  });
})

module.exports = router;
