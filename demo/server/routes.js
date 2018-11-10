const controllers = require('./controllers')

module.exports = function(app) {

  app
    .get('/api/users', controllers.getAll)
    .get('/api/users/:id', controllers.getOne)
    .post('/api/users', controllers.createNew)
    .put('/api/users/:id', controllers.updateOne)
    .delete('/api/users/:id', controllers.deleteOne)
    
    // catch-alls for error handling *optional*
    .get('*', controllers.error)
    .post('*', controllers.error)
    .put('*', controllers.error)
    .delete('*', controllers.error)

}
