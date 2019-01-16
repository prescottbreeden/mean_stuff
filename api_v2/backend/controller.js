const User = require('./models')

module.exports = {
  getAll,
  getOne,
  create,
  update,
  delete
}

async function getAll(req, res) {
  const results = await User.find();
  return res.json(results);
}

async function getOne(req, res) {
  const id = req.params.id;
  const results = await User.find({ _id: id });
  return res.json(results);
}

async function create(req, res) {
  const data = req.body;
  const results = await User.create(data);
  return res.json(results);
}

async function update(req, res) {
  const id = req.params.id;
  const {name, email} = req.body;
  const user = await User.find({ _id: id });
  user.name = name;
  user.email = email;
  await user.save();
  return res.json(results);
}

async function delete(req, res) {
  const id = req.params.id;
  const results = await User.remove(data);
  return res.json(results);
}
