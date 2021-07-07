const connection = require("./connection");
const { ObjectId } = require("mongodb");

// const serialize = (authorData) => {
//   return {
//     id: authorData.id,
//     firstName: authorData.first_name,
//     middleName: authorData.middle_name,
//     lastName: authorData.last_name,
//   };
// };

// const createAuthor = (firstName, middleName, lastName) => {
//   connection.execute("INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)", [
//     firstName,
//     middleName,
//     lastName,
//   ]);
// };

const createAuthor = async (firstName, middleName, lastName) =>
  connection()
    .then((db) =>
      db.collection("authors").insertOne({ firstName, middleName, lastName })
    )
    .then((result) => ({
      id: result.insertedId,
      firstName,
      middleName,
      lastName,
    }));

// const getAll = async () => {
//   const [authors] = await connection.execute(
//     "SELECT id, first_name, middle_name, last_name FROM authors"
//   );
//   return authors.map(serialize).map(getNewAuthor);
// };

const getAll = async () => {
  return connection()
    .then((db) => db.collection("authors").find().toArray())
    .then((authors) =>
      authors.map(({ _id, firstName, middleName, lastName }) => ({
        id: _id,
        firstName,
        middleName,
        lastName,
      }))
    );
};

// const findById = async (id) => {
//   const [authorData] = await connection.execute(
//     `SELECT * FROM authors WHERE id=?`,
//     [id]
//   );
//   if (authorData.length === 0) return null;
//   const { firstName, middleName, lastName } = authorData
//     .map(serialize)
//     .map(getNewAuthor)[0];
//   return getNewAuthor({ id, firstName, middleName, lastName });
// };

const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const authorData = await connection().then((db) =>
    db.collection("authors").findOne(new ObjectId(id))
  );

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return { id, firstName, middleName, lastName };
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};