const Book = require('./models');

async function get(req, res) {
  res.json({
    user: req.user,
    auth: req.authenticated,
    permission: req.permission,
  });
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
  get,
  post,
};
