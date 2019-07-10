const Joi = require('joi');

module.exports = {
  listOne: {
    params: {
      id: Joi.string().regex(new RegExp('^[0-9a-fA-F]{24}$')).required(),
    },
  },
  list: {
    query: {
      skip: Joi.number().integer().min(0),
      limit: Joi.number().integer().min(0),
    },
  },
  create: {
    post: {
      title: Joi.string().required(),
      authors: Joi.array().items(Joi.string().required()),
      edition: Joi.string(),
      image: Joi.string(),
      category: Joi.string(),
      price: Joi.number().required(),
    },
  },
};
