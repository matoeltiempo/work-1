const bcrypt = require('bcryptjs');
const User = require('../models/user');

module.exports.returnsAllUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err.message}` }));
};

module.exports.returnsUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: `Пользователь с таким id не найден` });
      } res.send({ data: user });
    })
    .catch(() => res.status(404).send({ message: `Пользователь с таким id не найден` }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err.message}` }));
};

module.exports.createUser = (req, res) => {
  bcrypt.hash(req.body.password, 10)
    .then((hash) => User.create({
      name: req.body.name,
      about: req.body.about,
      avatar: req.body.avatar,
      email: req.body.email,
      password: hash,
    }))
    .then((user) => res.send({ user }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err.message}` }));
};

module.exports.login = (req, res) => {

};

module.exports.updateUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.findByIdAndUpdate(
    req.params.id,
    { name, about, avatar },
    { new: true, runValidators: true, upsert: true },
  )
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err.message}` }));
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.params.id,
    { avatar },
    { new: true, runValidators: true, upsert: true },
  )
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err.message}` }));
};