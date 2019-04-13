const Book = require('./models');

async function get(req, res){
    // eslint-disable-next-line no-console
    console.log('book store')
}

async function post(req, res) {
    // eslint-disable-next-line no-unused-vars
    const {user, name, author, edition } = req.body;
    const data = {
        name, 
        author, 
        edition
    }
    // check user in database if it exists only then create book
  const book = new Book();
  book.save();
}

module.exports = {
    get,
    post
}