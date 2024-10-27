const mongoose = require('mongoose');
const mongoUri = process.env.MONGO_URI;

const connectMongoDB = () => (mongoose.connect(mongoUri));

module.exports = connectMongoDB;