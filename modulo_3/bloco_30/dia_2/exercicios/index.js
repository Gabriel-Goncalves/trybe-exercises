const express = require('express');
// const bodyParser = require("body-parser");

const booksControllers = require('./controllers/booksControllers');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/books', booksControllers);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));