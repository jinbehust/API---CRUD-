/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
const dbConfig = require('./config/note.database');

mongoose.connect(dbConfig.url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
}).then(() => {
  console.log('Successfully connected to the database');
}).catch((err) => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my application.' });
});

app.use(require('./app/routes/note.routes'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
