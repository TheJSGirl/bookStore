const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  user: {
    type: String,
    trim: true,
    required: true,
  },
  title: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  author: {
    type: String,
    trim: true,
    required: true,
  },
  edition: {
    type: Number,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
}, { strict: true, timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
