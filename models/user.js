const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');
const isUrl = require('validator/lib/isURL');

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    minlength: [2, "от 2 до 30 символов"],
    maxlength: [30, "от 2 до 30 символов"],
  },
  about: {
    required: true,
    type: String,
    minlength: [2, "от 2 до 30 символов"],
    maxlength: [30, "от 2 до 30 символов"],
  },
  avatar: {
    required: true,
    type: String,
    validate: {
      validator: (v) => isUrl(v),
      message: "Не ссылка",
    },
  },
  email: {
    require: true,
    type: String,
    validate: {
      validator: (v) => isEmail(v),
      message: "Неправильная почта",
    },
  },
  password: {
    require: true,
    type: String,
    minlength: [8, "от 8 символов"],
  },
});

module.exports = mongoose.model("user", userSchema);