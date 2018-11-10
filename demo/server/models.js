// Example Mongoose ORM for creating MongoDB Collection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demo', { useNewUrlParser: true})

const UserSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String}
}, {timestamps: true})

module.exports = mongoose.model('User', UserSchema);

