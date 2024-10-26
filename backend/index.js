const express = require('express');

const port = process.env.PORT || 5000;
const app = express();

// middlewares
app.use(express.json());

// routes


app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});