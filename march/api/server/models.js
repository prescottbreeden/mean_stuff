const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/tasks_demo';
mongoose.connect(connectionString, { useNewUrlParser: true })
  .then(() => 'Successfully connected to Mongo!')
  .catch(err => console.log(err));

const TaskSchema = new mongoose.Schema({
  title: String,
  desc: String
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);
