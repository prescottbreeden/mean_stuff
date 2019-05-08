const mongoose = require('mongoose');
const connectString = 'mongodb://localhost/superheros';
mongoose.connect(connectString, {useNewUrlParser:true});

const SuperHeroSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3
  },
  power: {
    type: String,
    minlength: 5
  }
}, {timestamps:true});

module.exports = mongoose.model('SuperHero', SuperHeroSchema);