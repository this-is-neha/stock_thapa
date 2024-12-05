const mongoose = require("mongoose");


const MarketRateSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      required: true,
      unique: true, 
      uppercase: true, 
    },
    price: {
      type: Number,
      required: true,
    },
    change: {
      type: Number,
      required: true,
    },
    percentChange: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

const MarketRate = mongoose.model("MarketRate", MarketRateSchema);

module.exports = MarketRate;
