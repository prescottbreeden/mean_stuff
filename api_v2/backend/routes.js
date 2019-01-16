// const { getAll, getOne, create, update, delete } = require('./controller');
const c = require('./controller');

module.exports = (app) => {
  app
    .get('/api/users', c.getAll)
    .get('/api/users/:id', c.getOne)
    .post('/api/users', c.create)
    .put('/api/users/:id', c.update)
    .delete('/api/users/:id', c.delete)
}
