const { getAll, getOne, create, update, deleteUser } = require('./controller');

module.exports = (app) => {
  app
    .get('/api/users', getAll)
    .get('/api/users/:id', getOne)
    .post('/api/users', create)
    .put('/api/users/:id', update)
    .delete('/api/users/:id', deleteUser)
}
