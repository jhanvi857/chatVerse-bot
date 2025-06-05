// models/User.js
const mongoose = require('mongoose');

const loginUserSchema = new mongoose.Schema({
  username: String,
  password: String,
  chatHistory: [
    {
      question: String,
      answer: String,
      timestamp: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model('loginUser', loginUserSchema ,'user');