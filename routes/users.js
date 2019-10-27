const router = require('express').Router();
const { createUser } = require('../controllers/user');

const users = require('../data/users');


router.get('/users', (req, res) => {
  res.send(users);
});

router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  let flag = '';
  users.forEach((item) => {
    if (item._id === id) {
      flag = item;
    }
  });

  if (!flag) {
    res.statusCode = 404;
    res.send({ "message": "Нет пользователя с таким id" });
  } else res.send(flag);
});

router.post('/users', createUser);

module.exports = router;