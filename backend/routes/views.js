const express = require('express');
const router = express.Router();
const viewModel = require('../database/models/view');
const resObject = require('../configs/response');
const { visitCountId } = require('../configs/server-config.json');

router.get('/views', async (req, res) => {
  // await viewModel.findOneAndUpdate({ _id: visitCountId }, { count: 0 }, { new: true });
  const incremented = await viewModel.findOneAndUpdate({ _id: visitCountId }, { $inc: { count: 1 }}, { new: true });
  res.json(resObject(incremented, true));
})

module.exports = router