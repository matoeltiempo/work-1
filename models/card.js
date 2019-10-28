const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    required: true,
    type: String,
    validate: {
      validator: (v) => /https?:/.test(v),
      message: "Не ссылка",
    },
  },
  owner: {
    required: true,
    type: Object,
    ref: "user",
  },
  likes: {
    type: Object,
    ref: "user",
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("card", cardSchema);