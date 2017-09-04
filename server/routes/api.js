const express = require('express');
const router = express.Router();

const todos = [
  { todo: 'buy beer', when: 'today', where: 'kroger' },
  { todo: 'feed cat', when: 'today', where: 'home' },
  { todo: 'pick up mom', when: 'tomorrow', where: 'airport' },
];


router.get('/todos', (req, res) => {
  res.json(todos);
});

router.post('/todos', (req, res) => {
  console.log(req.body);
  const todo = req.body;
  todos.push(todo);
  console.log(todos);
  res.send({"message":"success"});
})

module.exports = router;
