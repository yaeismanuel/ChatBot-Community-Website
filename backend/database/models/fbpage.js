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
  img: {
    type: String
  },
  link: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('fbpage', fbpageSchema);