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
    body: {
      title: Joi.string().required(),
      author: Joi.string().required(),
      edition: Joi.string(),
      image: Joi.string(),
      category: Joi.string(),
      price: Joi.number().required(),
    },
  },
  edit: {
    body: {
      title: Joi.string(),
      author: Joi.string(),
      edition: Joi.string(),
      image: Joi.string(),
      category: Joi.string(),
      price: Joi.number(),
    },
  },
};
