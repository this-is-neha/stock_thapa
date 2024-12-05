const Joi = require("joi");


const MarketRateDTO = Joi.object({
  symbol: Joi.string().required().uppercase(),
  price: Joi.number().required(),             
  change: Joi.number().required(),            
  percentChange: Joi.number().required(),     
});



module.exports = {
  MarketRateDTO,
 
};
