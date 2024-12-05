const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

// Export the model properly
const Item = mongoose.model('Item', itemSchema);  // Ensure this is correct
module.exports = Item;
