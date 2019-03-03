const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String
})

mongoose.model('User', UserSchema);
const User = mongoose.model('User');

module.exports = User;
