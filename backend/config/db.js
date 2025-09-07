const mongoose = require('mongoose');

const connectDB = async () => {
  console.log(process.env.MONGO_URI)
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log('MongoDB connected!!')
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
}

module.exports = connectDB;