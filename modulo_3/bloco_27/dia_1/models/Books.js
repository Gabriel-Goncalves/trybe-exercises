const connection = require("./connection");

const isValid = (title, authorId) => {
  if (!title || title.length < 3) return false;
  if (!authorId) return false;
  return true;
};

const createBook = (title, authorId) => {
  connection.execute(
    "INSERT INTO model_example.books (title, author_id) VALUES (?, ?)",
    [title, authorId]
  );
};

const getAll = async () => {
  const books = connection.execute("SELECT * FROM books");
  return books;
};

const getByAuthorId = async (authorId) => {
  const query = "SELECT * FROM model_example.books WHERE author_id=?;";
  // O caractere `?` na query será substituído pelo `authorId` que informamos no Array.
  const [books] = await connection.execute(query, [authorId]);
  return books;
};

module.exports = {
  getAll,
  getByAuthorId,
  isValid,
  createBook,
};
