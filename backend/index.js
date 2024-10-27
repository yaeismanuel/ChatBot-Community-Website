const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const connectMongoDB = require('./database/connectMongoDB');

const PORT = process.env.PORT || 5000;
const app = express();
const whitelist = ['http://localhost:5173', process.env.frontend]
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true
}

// middlewares
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path);
  console.log(req.cookies.jwt);
  console.log(req.cookies);
  next();
})

// routes
app.get('/', (req, res) => res.send('ChatBot Community Server 🤖'));
app.use(require('./routes/login-page'));
app.use('/api/websites', require('./routes/websites-page'));

connectMongoDB().then((connection) => {
  console.log('Database connected.');
}).catch((e) => console.log('Database connection error.'))

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
  });