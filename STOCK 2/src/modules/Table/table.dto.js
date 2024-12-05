const Joi = require('joi');

const CreateItemDTO = Joi.object({
  name: Joi.string().required().min(3).max(50),
  description: Joi.string().required().min(10).max(200),
  price: Joi.number().required().min(0),
  category: Joi.string().required().min(3).max(50),
});

const UpdateItemDTO = Joi.object({
  name: Joi.string().min(3).max(50),
  description: Joi.string().min(10).max(200),
  price: Joi.number().min(0),
  category: Joi.string().min(3).max(50),
}).or('name', 'description', 'price', 'category');

module.exports = { CreateItemDTO, UpdateItemDTO };
