const express = require('express');
const rateLimit = require('express-rate-limit');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require('path');
const mongoose = require('mongoose');
const helmet = require('helmet');

const cards = require('./routes/cards');
const users = require('./routes/users');

const { login, createUser } = require('./controllers/user');

const { PORT = 3000, BASE_PATH } = process.env;
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

mongoose.connect("mongodb://localhost:27017/mestodb", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(limiter);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(helmet());


app.use((req, res, next) => {
  req.user = {
    _id: '5db58bd31de2ae1184558ad5',
  };

  next();
});

app.use('/cards', cards);
app.use('/users', users);
app.post('/signip', login);
app.post('/signup', createUser);

app.use((req, res) => {
  res.status(404).send({ "message": "Запрашиваемый ресурс не найден" });
});

app.listen(PORT, () => {
  console.log('Ссылка на сервер:');
  console.log(BASE_PATH);
});
