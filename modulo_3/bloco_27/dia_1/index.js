const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const Author = require('./services/Author');
const Books = require('./models/Books');

app.use(bodyParser.json());

app.get("/authors", async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const {id} = req.params;
  const authors = await Author.findById(id);
  if(!authors) return res.status(404).json({message: "Author not found"})
  res.status(200).send(authors);
})

app.get("/books", async (req, res) => {
  const {author_id} = req.query;
  let books = [];
  if(author_id) {
    books = await Books.getByAuthorId(author_id);
  } else {
    books = await Books.getAll();
  }
  res.status(200).json(books);
})


app.post('/authors', async (req, res) => {
  const {first_name, middle_name, last_name} = req.body;
  const author = await Author.create(first_name, middle_name, last_name);

  if(!author) return res.status(400).json({message: "not valid dates"});

  res.status(201).json(author)
})


app.post('/books', async (req, res) => {
  const {title, author_id} = req.body;
  if(!Books.isValid(title, author_id)) return res.status(400).json({message: 'Dados inválidos'});
  await Books.createBook(title, author_id);
  res.status(201).json({ message: 'Livro criado com sucesso! '});
})

app.listen(port, () => console.log("Listen at port " + port));
