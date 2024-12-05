const Joi = require('joi');


const pieDto = Joi.object({
  series: Joi.array().items(Joi.number().required()).required(),
});

module.exports = pieDto;
