const Book = require('./models');
const { response } = require('./../../utils');

async function list(req, res) {
  const limit = parseInt(req.query.limit, 10) || 10;
  const skip = parseInt(req.query.skip, 10) || 0;
  const books = await Book.find().skip(skip).limit(limit);
  res.status(200).send(response(books, '', true));
}

async function listOne(req, res) {
  const { id } = req.params;
  const book = await Book.findOne({ _id: id });
  res.status(200).json(response(book, '', true));
}

async function post(req, res) {
  const {
    user, name, author, edition,
  } = req.body;
  const data = {
    name,
    author,
    edition,
  };

  const book = new Book(data);
  book.save();
  res.send();
}

module.exports = {
  list,
  listOne,
  post,
};
