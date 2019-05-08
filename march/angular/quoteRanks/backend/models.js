const mongoose = require('mongoose');
const connectString = 'mongodb://localhost/{{change my name}}';
mongoose.connect(connectString, {useNewUrlParser:true});

const SchemaName = new mongoose.Schema({
  // create Schema
}, {timestamps:true});

module.exports = mongoose.model('document name', SchemaName);