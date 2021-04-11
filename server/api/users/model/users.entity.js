const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'user'],
  },
});

module.exports = mongoose.model('User', usersSchema);
