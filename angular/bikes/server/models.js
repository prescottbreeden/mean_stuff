const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bikes', { useNewUrlParser: true})

const BikeSchema = new mongoose.Schema({
  name: {type: String},
  make: {type: String},
  price: {type: Number},
  max_speed: {type: Number},
  miles: {type: Number}
}, {timestamps: true})

mongoose.model('Bike', BikeSchema);
const Bike = mongoose.model('Bike');

module.exports = Bike;