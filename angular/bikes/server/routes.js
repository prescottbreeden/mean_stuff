const controllers = require('./controllers')

module.exports = function(app) {

  app
    .get('/bikes', controllers.getAll)
    .get('/bikes/:id', controllers.getOne)
    .post('/bikes', controllers.newBike)
    .put('/bikes/:id', controllers.updateBike)
    .delete('/bikes/:id', controllers.deleteBike)
    .get('*', controllers.error)

}