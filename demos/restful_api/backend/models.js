const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/restful_api_demo');

const TaskSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  completed: { type: Boolean, default: false }
}, { timestamps: true })

module.exports = mongoose.model('Task', TaskSchema);