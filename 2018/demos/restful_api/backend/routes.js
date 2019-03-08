const c = require('./controller');

module.exports = function(app) {

  app
    .get('/api/tasks', c.getAll)
    .get('/api/tasks/:id', c.getOne)
    .post('/api/tasks', c.create)
    .put('/api/tasks/:id', c.update)
    .delete('/api/tasks/:id', c.delete)

}