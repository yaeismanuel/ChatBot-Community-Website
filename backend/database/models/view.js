const mongoose = require('mongoose');

const viewSchema = new mongoose.Schema({
  website: String,
  url: String,
  count: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('view', viewSchema);