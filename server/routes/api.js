const express = require('express');
const router = express.Router();

const todos = [
  { todo: 'get milk' },
  { todo: 'feed cat' },
  { todo: 'buy groceries' },
];


router.get('/todos', (req, res) => {
  res.json(todos);
});

router.post('/todos', (req, res) => {
  console.log(req.body);
  const todo = req.body.todo;
  todos.push(todo);
  console.log(todos);
  res.send('success')
})

module.exports = router;
