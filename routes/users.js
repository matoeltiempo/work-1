const router = require('express').Router();
const users = require('../data/users');

router.get('/users', (req, res) => {
  res.send(users);
});

module.exports = router;