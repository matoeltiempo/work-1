/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const { PORT = 3000, BASE_PATH } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log('Ссылка на сервер:');
  console.log(BASE_PATH);
});
