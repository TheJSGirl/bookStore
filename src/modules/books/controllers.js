const Book = require('./models');
const { response } = require('./../../utils');

async function list(req, res) {
  const limit = parseInt(req.query.limit, 10) || 10;
  const skip = parseInt(req.query.skip, 10) || 0;
  const books = await Book.find({ deleted: false }).skip(skip).limit(limit);
  res.status(200).send(response(books, '', true));
}

async function listOne(req, res) {
  const { id } = req.params;
  const book = await Book.findOne({ _id: id, deleted: false });
  res.status(200).json(response(book, '', true));
}

async function create(req, res) {
  // Admins only can create books as of now
  // if (!req.permission.admin) {
  //   return res.status(401).send(response({}, 'Unauthorized request', false));
  // }
  const book = await Book
    .create({ ...req.body });
  if (!book) {
    return res.status(400).send(response({}, 'Something went wrong', false));
  }
  return res.status(200).send(response(book, '', true));
}
async function remove(req, res) {
  const { id } = req.params;
  const result = await Book.findByIdAndUpdate({ _id: id }, { deleted: true }, { new: true });
  return res.status(200).send(response(result, '', true));
}

async function edit(req, res) {
  const { id } = req.params;
  const book = await Book
    .findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });
  if (!book) {
    return res.status(400).send(response({}, 'Something went wrong', false));
  }
  res.status(200).send(response(book, 'Successfully Updated the book', true));
}

module.exports = {
  list,
  listOne,
  create,
  remove,
  edit,
};
