const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    require: true,
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    require: true,
    type: String,

  },
  owner: {
    require: true,
    type: Object,
    ref: "user",
  },
  likes: {
    type: Object,
    ref: "user",
    default: [],
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("card", cardSchema);