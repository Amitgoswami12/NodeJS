const mongoose = require('mongoose');
require('dotenv').config();
const URI = process.env.Mongo_URI
const connectDB = async () => {
  try {
    await mongoose.connect(URI);

    console.log('Database is connected Successfully');
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;