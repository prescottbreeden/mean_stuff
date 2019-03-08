const controllers = require('./controllers')

module.exports = function(app) {

  app
    .get('/api/tasks', controllers.getAll)
    .get('/api/tasks/:id', controllers.getOne)
    .post('/api/tasks', controllers.createNew)
    .put('/api/tasks/:id', controllers.updateOne)
    .delete('/api/tasks/:id', controllers.deleteOne)
    .all('*', controllers.error)

}
