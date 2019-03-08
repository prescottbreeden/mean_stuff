const Models = require('./models')

async function getAll(req, res) {
  const results = await Models.findAllUsers();
  console.log(results);
  return res.json(results);
}

async function getOne(req, res) {
  const id = req.params.id;
  const results = await Models.find({ _id: id });
  return res.json(results);
}

async function create(req, res) {
  const data = req.body;
  const results = await Models.create(data);
  return res.json(results);
}

async function update(req, res) {
  const id = req.params.id;
  const {name, email} = req.body;
  const user = await Models.find({ _id: id });
  user.name = name;
  user.email = email;
  await user.save();
  return res.json(results);
}

async function deleteUser(req, res) {
  const id = req.params.id;
  const results = await Models.remove(data);
  return res.json(results);
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteUser
}
