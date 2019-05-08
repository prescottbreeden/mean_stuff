const mongoose = require('mongoose');
const connectString = 'mongodb://localhost/superheros';
mongoose.connect(connectString, {useNewUrlParser:true});

const SuperHeroSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Only invisible superheros can have blank names'],
    minlength: [3, 'No superheroes have 3 letter names']
  },
  power: {
    type: String,
    required: [true, 'If they didn\'t have a power, they would not be a super hero'],
    minlength: [5, 'Powers are at least 5 characters']
  }
}, {timestamps:true});

module.exports = mongoose.model('SuperHero', SuperHeroSchema);