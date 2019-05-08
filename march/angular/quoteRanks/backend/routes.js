const controllers = require('./controllers');

module.exports = app => {
  app
    .get('/api/Model', controllers.getAllModel)
    .get('/api/Model/:id', controllers.getOneModel)
    .post('/api/Model', controllers.createModel)
    .put('/api/Model/:id', controllers.updateModel)
    .delete('/api/Model/:id', controllers.deleteModel);
}