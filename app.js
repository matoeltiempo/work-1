const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const mongoose = require('mongoose');

const cards = require('./routes/cards');
const users = require('./routes/users');

const { PORT = 3000, BASE_PATH } = process.env;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mestodb", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', cards);
app.use('/', users);
app.use((req, res) => {
  res.status(404).send({ "message": "Запрашиваемый ресурс не найден" });
});

app.listen(PORT, () => {
  console.log('Ссылка на сервер:');
  console.log(BASE_PATH);
});
