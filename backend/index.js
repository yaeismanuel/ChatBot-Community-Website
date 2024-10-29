const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const authenticate = require('./middlewares/authentication');
const connectMongoDB = require('./database/connectMongoDB');

const PORT = process.env.PORT || 5000;
const app = express();
const origin = process.env.FRONTEND || 'http://localhost:5173';

// middlewares
app.use(cors({ origin }));
app.use(cookieParser());
app.use(express.json());
app.use(authenticate);
app.use((req, res, next) => {
  console.log(req.path);
  next();
})

// routes
app.get('/', (req, res) => res.send('ChatBot Community Server 🤖'));
app.use(require('./routes/login-page'));
app.use('/user', require('./routes/user-profile'));
app.use('/api/websites', require('./routes/websites-page'));
app.use('/api/homepage', require('./routes/homepage'));

// Database connection
connectMongoDB().then((connection) => {
  console.log('Database connected.');
}).catch((e) => console.log('Database connection error.'))

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
  console.log(`Frontend: ${origin}`);
});