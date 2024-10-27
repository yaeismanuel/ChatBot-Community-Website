const mongoose = require('mongoose');

const websiteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  link: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  developer: {
    type: String,
    required: true
  },
  devFb: {
    type: String,
    required: true
  },
  devFbLink: {
    type: String,
    required: true
  },
}, { timestamps: true });

const model = mongoose.model('website', websiteSchema);

module.exports = model