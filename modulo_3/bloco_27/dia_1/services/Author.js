const AuthorModel = require("../models/Author");

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== "string") return false;
  if (!lastName || typeof lastName !== "string") return false;

  return true;
};

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(" ");
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const getAll = async () => {
  const authors = await AuthorModel.getAll();
  return authors.map(getNewAuthor);
};

const findById = async (id) => {
  const author = await AuthorModel.findById;
  return getNewAuthor(author);
};

const create = async (firstName, middleName, lastName) => {
  const authorValid = isValid(firstName, middleName, lastName);
  if (!authorValid) return false;
  const {id} = await AuthorModel.createAuthor(firstName, middleName, lastName);
  return getNewAuthor({id, firstName, middleName, lastName});
};

module.exports = {
  getAll,
  findById,
  create,
};
