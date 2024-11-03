const mongoose = require('mongoose');

const fbpageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  img: {
    type: String
  },
}, { timestamps: true });

module.exports = mongoose.model('fbpage', fbpageSchema);