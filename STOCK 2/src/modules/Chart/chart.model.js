const mongoose = require('mongoose');

const pieSchema = new mongoose.Schema({
  series: {
    type: [Number],
    required: true,
  },
});

module.exports = mongoose.model('Pie', pieSchema);
