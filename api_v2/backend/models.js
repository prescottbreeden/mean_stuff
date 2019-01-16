const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/api_demo');

const UserSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
