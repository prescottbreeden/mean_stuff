// Example Mongoose ORM for creating MongoDB Collection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/restful_crud', { useNewUrlParser: true})

const TaskSchema = new mongoose.Schema({
  title: {type: String},
  description: {type: String}
}, {timestamps: true})
 
module.exports = mongoose.model('Task', TaskSchema);

