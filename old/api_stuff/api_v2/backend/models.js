const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/api_demo', 
  { useNewUrlParser: true });

const UserSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String }
}, { timestamps: true });

const UserModel = mongoose.model('User', UserSchema);

async function findAllUsers() {
  console.log('inside query')
  await UserModel.find()
    .then(results => {
      console.log('success?');
      return {
        message: 'success',
        data: results
      }
    })
    .catch(err => {
      console.log('err?');
      return {
        message: 'error',
        data: err
      } 
    })
}

module.exports = {
  UserModel,
  findAllUsers
}
