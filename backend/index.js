const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const connectMongoDB = require('./database/connectMongoDB');

const PORT = process.env.PORT || 5000;
const app = express();

// middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path);
  next();
})

// routes
apo.get('/', (req, res) => res.send('ChatBot Community Server 🤖'));
app.use(require('./routes/login-page'));
app.use('/api/websites', require('./routes/websites-page'));

connectMongoDB().then((connection) => {
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
  });
}).catch((e) => console.log('Database connection error.'))
