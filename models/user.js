const mongoose = require('mongoose');

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
      validator: (v) => /https?:/.test(v),
      message: "Не ссылка",
    },
  },
});

module.exports = mongoose.model("user", userSchema);