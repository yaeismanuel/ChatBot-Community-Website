const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const authenticate = require('./middlewares/authentication');
const connectMongoDB = require('./database/connectMongoDB');

const PORT = process.env.PORT || 5000;
const app = express();
const frontend = process.env.FRONTEND || 'http://localhost:5173';

const corsOptions = {
  origin: (origin, callback) => {
    if (origin === frontend) {
      return callback(null, true);
    } else {
      return callback(null, false);
    }
  },
};


// middlewares
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(authenticate);

// routes
app.get('/', (req, res) => res.send('ChatBot Community Server 🤖'));
app.use(require('./routes/views'));
app.use(require('./routes/login-page'));
app.use(require('./routes/user-profile'));
app.use('/api/websites', require('./routes/websites-page'));
app.use('/api/homepage', require('./routes/homepage'));
app.use('/api/apis', require('./routes/api-page'));
app.use('/api/fbpages', require('./routes/fbpage'));
app.use('/api/fbpages', require('./routes/fbpage'));
app.use('/api/posts', require('./routes/post-page'));

// Database connection
connectMongoDB().then((con) => {
  console.log('Database connected.');
  require('./database/models/user').find({}).then(d => {})

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
    console.log(`Frontend: ${frontend}`);
  });
}).catch((e) => {
  console.log('Database connection error.')
  process.exit(1);
})

