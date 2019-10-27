const User = require('../models/user');

module.exports.returnsAllUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err.message}` }));
};

module.exports.returnsUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.send({ data: user }))
    .catch((err, user) => {
      if (!user) {
        res.status(404).send({ message: "Пользователь с таким id не найден" });
      } else {
        res.status(500).send({ message: `Произошла ошибка ${err.message}` });
      }
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err.message}` }));
};